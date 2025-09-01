import { Header } from "@/components/header"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Heart, TreesIcon as Lungs, Activity, Star, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { SimpleEarth } from "@/components/simple-earth"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* ✅ Add Header at the top */}
      <Header />
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Revolutionary Air Protection
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Breathe Clean, Live Better with <span className="text-green-600">Smart Masks</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Advanced filtration technology that adapts to your environment. Protect yourself from pollution,
                  allergens, and airborne particles with our AI-powered smart masks.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/products">Shop Smart Masks</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">4.9/5 from 2,000+ reviews</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
                <Suspense fallback={<div className="w-64 h-64 bg-gray-200 rounded-full animate-pulse" />}>
                  <SimpleEarth />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Protect Your Health from Air Pollution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Air pollution affects every organ in your body. Our smart masks provide comprehensive protection against
              the invisible threats that surround us daily.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-red-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cardiovascular Protection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fine particles (PM2.5) can enter your bloodstream, causing inflammation and increasing risk of heart
                  attacks, strokes, and hypertension. Our filters block 99.97% of these dangerous particles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lungs className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Respiratory Health</h3>
                <p className="text-gray-600 leading-relaxed">
                  Protect against asthma triggers, bronchitis, and COPD. Our multi-layer filtration system removes
                  allergens, dust, and toxic gases that damage lung tissue and reduce breathing capacity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Immune System Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Chronic exposure to pollutants weakens immunity and increases infection risk. Our smart masks create a
                  clean air bubble around you, reducing the toxic load on your immune system.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Long-term Health Impact</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reduces risk of premature death by up to 15%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Prevents cognitive decline and neurological disorders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Protects children's developing lungs and brain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reduces cancer risk from airborne carcinogens</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold mb-4">WHO Air Quality Guidelines</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>PM2.5 Safe Level:</span>
                    <span className="font-medium">5 μg/m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average City Level:</span>
                    <span className="font-medium text-red-600">35 μg/m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Our Protection:</span>
                    <span className="font-medium text-green-600">99.97% filtration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Smart Technology for Clean Air</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our masks combine advanced filtration with intelligent sensors to provide real-time protection and
              comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">HEPA H13 Filtration</h3>
                <p className="text-gray-600">
                  Medical-grade filters that capture 99.97% of particles as small as 0.3 microns
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time AQI Monitoring</h3>
                <p className="text-gray-600">Built-in sensors detect air quality and adjust filtration automatically</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Comfort Fit Technology</h3>
                <p className="text-gray-600">Ergonomic design with adjustable straps for all-day comfortable wear</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">99.97%</div>
              <div className="text-green-100">Filtration Efficiency</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Protection</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">15%</div>
              <div className="text-green-100">Health Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ready to Breathe Cleaner Air?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have already improved their health with our smart masks. Start your journey to
            cleaner air today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/blog">Read Our Guide</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
