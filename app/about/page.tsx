"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Heart,
  Shield,
  Users,
  Leaf,
  Target,
  Eye,
  ArrowRight,
  CheckCircle,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Update the teamMembers array with the new team
const teamMembers = [
  {
    name: "Darshan B I",
    role: "Founder",
    bio: "Visionary entrepreneur with a passion for clean air technology and sustainable solutions for environmental challenges.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
  },
  {
    name: "Madan Kumar E S",
    role: "Chief Executive Officer",
    bio: "Experienced leader with expertise in scaling technology startups and driving innovation in the air purification industry.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
  },
  {
    name: "Bhargav M",
    role: "Chief Financial Officer",
    bio: "Financial strategist with a strong background in investment management and sustainable business growth.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
  },
  {
    name: "Akshay S N",
    role: "Chief Operating Officer",
    bio: "Operations expert focused on optimizing supply chains and manufacturing processes for environmental technologies.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
  },
]

const values = [
  {
    icon: Heart,
    title: "Health First",
    description: "We prioritize the health and well-being of our customers and their families above all else.",
  },
  {
    icon: Globe,
    title: "Environmental Responsibility",
    description: "Committed to sustainable practices and reducing our environmental footprint.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control ensure our products meet the highest standards.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Building healthier communities through accessible air purification solutions.",
  },
]

const achievements = [
  { number: "50,000+", label: "Happy Customers" },
  { number: "99.97%", label: "Filtration Efficiency" },
  { number: "15+", label: "Cities Served" },
  { number: "5", label: "Years Warranty" },
]

const socialMediaLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    url: "https://www.instagram.com/aarambh_366/profilecard/?igsh=eDNkbHl5bGZnczFi",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    description: "Follow our journey and daily updates",
  },
  {
    icon: Youtube,
    name: "YouTube",
    url: "https://youtube.com/@aarambh-q8r?si=fYbJoTYeWjCCjjae",
    color: "bg-red-500",
    description: "Watch our product demos and tutorials",
  },
  {
    icon: Facebook,
    name: "Facebook",
    url: "https://www.facebook.com/share/1F5kjxrYH7/",
    color: "bg-blue-600",
    description: "Join our community discussions",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6">
              About AirVita
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pioneering Clean Air
              <span className="text-primary block">Solutions for India</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded with a mission to combat air pollution and improve public health, AirVita is at the forefront of
              developing innovative air purification technologies for Indian homes and businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AirVita Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide every Indian family with access to clean, healthy air through innovative, affordable, and
                  sustainable air purification solutions. We're committed to reducing the health impact of air pollution
                  across urban and rural communities.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create a future where clean air is not a luxury but a fundamental right. We envision an India where
                  every breath taken indoors contributes to better health, productivity, and quality of life for all
                  citizens.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at AirVita
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Making a difference in air quality across India
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.number}</div>
                <div className="text-primary-foreground/80">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate experts dedicated to improving air quality for everyone
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-green-400/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow our journey and stay updated with the latest news, tips, and product updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {socialMediaLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${social.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                    >
                      <social.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{social.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{social.description}</p>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button variant="outline" className="w-full">
                        Follow Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Sustainability Commitment</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At AirVita, we believe in protecting both indoor air quality and the environment. Our commitment to
                sustainability drives every aspect of our business.
              </p>

              <div className="space-y-4">
                {[
                  "Energy-efficient products that reduce power consumption",
                  "Recyclable materials and eco-friendly packaging",
                  "Carbon-neutral shipping and operations",
                  "Partnership with environmental organizations",
                  "Research into renewable energy integration",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg" className="mt-6">
                  Learn More About Our Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Sustainability" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Breathe Cleaner Air?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of families across India who have already made the switch to AirVita.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
