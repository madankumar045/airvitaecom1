"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CountdownTimer } from "@/components/countdown-timer"
import { SimpleEarth } from "@/components/simple-earth"
import { createRazorpayOrder, verifyPayment, getRazorpayConfig } from "@/app/actions/payment"
import { ArrowRight, Globe, Wind, Shield, Zap, CreditCard, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

// Target date for countdown: August 11, 2026
const targetDate = new Date("2026-08-11T00:00:00")

// Enhanced Floating Particles Component
function PollutionParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 bg-gray-300/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-40, 40, -40],
            x: [-20, 20, -20],
            opacity: [0.3, 0.9, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Pre-Order Component with Razorpay
function PreOrderSection() {
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const handlePreOrder = async () => {
    setIsProcessing(true)

    try {
      // Get Razorpay configuration
      const config = await getRazorpayConfig()

      // Create order using server action
      const result = await createRazorpayOrder(49900)

      if (!result.status) {
        throw new Error("Order was not created Successfully")
      }

      const order  = result

      if (typeof window !== "undefined" && window.Razorpay) {
        const options = {
          key: config.key,
          amount: order.amount,
          currency: order.currency,
          name: "AirVita",
          description: "Pre-order AirVita Air Purifier",
          order_id: order.id,
          handler: async (response: any) => {
            try {
              // Verify payment using server action
              const verificationResult = await verifyPayment({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              })
              if (verificationResult.success) {
                toast({
                  title: "Pre-order successful!",
                  description: `Payment ID: ${response.razorpay_payment_id}`,
                })
              } else {
                throw new Error(verificationResult.message)
              }
            } catch (error) {
              toast({
                title: "Payment verification failed",
                description: "Please contact support for assistance.",
                variant: "destructive",
              })
            } finally {
              setIsProcessing(false)
            }
          },
          prefill: {
            name: "",
            email: "",
            contact: "7795928200",
          },
          notes: {
            address: "AirVita Corporate Office, Hulimavu, Bengaluru 560076",
          },
          theme: {
            color: "#22c55e",
          },
          modal: {
            ondismiss: () => {
              setIsProcessing(false)
            },
          },
        }

        const rzp = new window.Razorpay(options)
        rzp.open()
      } else {
        throw new Error("Razorpay SDK not loaded")
      }
    } catch (error) {
      toast({
        title: "Pre-order failed",
        description: "Please try again later.",
        variant: "destructive",
      })
      setIsProcessing(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2 bg-green-100 text-green-800">
            🚀 Limited Time Offer
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Pre-Order Now</h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Reserve your AirVita product today. Limited slots available!
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-green-100 rounded-full p-4">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Secure Your Spot</h3>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-gray-700">Pre-order Amount:</span>
                <span className="text-3xl font-bold text-green-600">₹499</span>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Guaranteed early access to AirVita products</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Exclusive pre-order pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free shipping on final purchase</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span>Expected delivery: Q2 2024</span>
                </div>
              </div>
            </div>

            <Button
              onClick={handlePreOrder}
              disabled={isProcessing}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <CreditCard className="mr-3 h-5 w-5" />
              {isProcessing ? "Processing..." : "Pay ₹499 Now"}
            </Button>

            <p className="text-xs text-gray-500 mt-4">
              Secure payment powered by Razorpay. Your payment information is encrypted and secure.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: "Secure Payment", desc: "256-bit SSL encryption" },
              { icon: Clock, label: "Quick Process", desc: "2-minute checkout" },
              { icon: CheckCircle, label: "Guaranteed", desc: "100% refundable" },
              { icon: Globe, label: "Trusted", desc: "10,000+ pre-orders" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="bg-white rounded-full p-3 shadow-md">
                  <item.icon className="h-6 w-6 text-green-600" />
                </div>
                <span className="font-medium text-gray-900">{item.label}</span>
                <span className="text-sm text-gray-600">{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />

      {/* Razorpay Script */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />

      {/* Hero Section with Simple Earth */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <PollutionParticles />

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Breathe Pure with
                <span className="text-green-400 block">AirVita</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Air pollution is a growing concern worldwide. At AirVita, we are committed to providing innovative
                solutions to improve the air you breathe. Stay tuned for our upcoming products and updates.
              </p>

              {/* Countdown Timer */}
              <div className="mb-8">
                <h3 className="text-white/90 text-lg mb-4">Next Generation Launch In:</h3>
                <CountdownTimer targetDate={targetDate} />
                <p className="text-blue-200 mt-4 italic">
                  Stay tuned for our revolutionary air purification technology
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/products">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4">
                    Pre-order Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { icon: Globe, label: "Global Impact" },
                  { icon: Wind, label: "Pure Air" },
                  { icon: Shield, label: "Protection" },
                  { icon: Zap, label: "Innovation" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <feature.icon className="h-8 w-8 text-green-400" />
                    <span className="text-sm text-blue-100">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Simple Earth that's guaranteed to be visible */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[500px] md:h-[700px] relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            <SimpleEarth />

            {/* Pollution indicator overlay */}
            <div className="absolute top-4 right-4 bg-red-500/40 backdrop-blur-sm rounded-lg p-4 text-white border border-red-400/50 z-20 shadow-lg shadow-red-500/30">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-base font-medium">Pollution Hotspots</span>
              </div>
              <p className="text-sm text-red-100">Real-time air quality monitoring</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Pre-Order Section */}
      <PreOrderSection />

      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission: Clean Air for Everyone</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AirVita is dedicated to combating air pollution through innovative technology and sustainable solutions.
              We believe everyone deserves to breathe clean, healthy air, and we're working tirelessly to make that a
              reality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Advanced Technology",
                  description: "Cutting-edge filtration systems that remove 99.97% of airborne pollutants",
                  icon: Zap,
                },
                {
                  title: "Global Reach",
                  description: "Solutions designed to address air quality challenges worldwide",
                  icon: Globe,
                },
                {
                  title: "Sustainable Future",
                  description: "Environmentally conscious products that protect both you and the planet",
                  icon: Shield,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <item.icon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
