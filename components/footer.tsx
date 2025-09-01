import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Leaf, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react"

export function Footer() {
  const socialMediaLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/aarambh_366/profilecard/?igsh=eDNkbHl5bGZnczFi",
      color: "hover:text-pink-500",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/@aarambh-q8r?si=fYbJoTYeWjCCjjae",
      color: "hover:text-red-500",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/share/1F5kjxrYH7/",
      color: "hover:text-blue-500",
    },
  ]

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-green-900 text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">AirVita</span>
            </div>
            <p className="text-sm text-blue-200">
              Leading provider of advanced air purification solutions. Committed to helping you combat air pollution and
              breathe cleaner, healthier air.
            </p>
            <div className="space-y-2 text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>airvitabreathe@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-7795928200</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Hulimavu, Bengaluru 560076, India</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-blue-200 ${social.color} transition-colors p-2 rounded-lg hover:bg-white/10`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-blue-200 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-200 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-blue-200 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shipping" className="text-blue-200 hover:text-white">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-blue-200 hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-blue-200 hover:text-white">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-200 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-200 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-blue-200">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
            <div className="space-y-2 text-sm text-blue-100">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>airvitabreathe@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91-7795928200</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Hulimavu, Bengaluru 560076, India</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-blue-200">© {new Date().getFullYear()} AirVita. All rights reserved.</p>
          <div className="flex space-x-4 text-sm">
            <Link href="/terms" className="text-blue-200 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-blue-200 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-blue-200 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
