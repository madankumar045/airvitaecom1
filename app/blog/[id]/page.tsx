"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Share2, Bookmark, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a CMS or database
const blogPost = {
  id: "1",
  title: "The Hidden Dangers of Indoor Air Pollution in Indian Cities",
  excerpt: "Discover the surprising sources of indoor air pollution and how they affect your health in urban India.",
  content: `
    <p>Indoor air pollution in Indian cities is often 2-5 times worse than outdoor air pollution, yet most people spend 90% of their time indoors. This invisible threat lurks in our homes, offices, and schools, silently affecting our health and well-being, particularly in metropolitan areas like Delhi, Mumbai, and Bengaluru.</p>

    <h2>Common Sources of Indoor Air Pollution in Indian Homes</h2>
    
    <p>Understanding the sources of indoor air pollution is the first step toward creating a healthier living environment. Here are the most common culprits in Indian households:</p>
    
    <h3>1. Cooking and Kitchen Emissions</h3>
    <p>Traditional cooking methods using gas stoves, especially in poorly ventilated kitchens, release nitrogen dioxide, carbon monoxide, and particulate matter. Spice grinding and frying, common in Indian cooking, can significantly increase indoor PM2.5 levels.</p>
    
    <h3>2. Incense and Religious Practices</h3>
    <p>Burning incense sticks, dhoop, and diyas during daily prayers and festivals releases fine particulate matter and volatile organic compounds that can accumulate indoors without proper ventilation.</p>
    
    <h3>3. Outdoor Pollution Infiltration</h3>
    <p>In cities like Delhi and Mumbai, outdoor air pollution easily infiltrates homes through windows, doors, and ventilation systems, bringing in PM2.5, PM10, and other harmful pollutants.</p>
    
    <h3>4. Household Products and Cleaning Agents</h3>
    <p>Common cleaning products, air fresheners, and pesticides release volatile organic compounds (VOCs) that can cause respiratory irritation and long-term health issues.</p>
    
    <h2>Health Impact on Indian Families</h2>
    
    <p>The health effects of indoor air pollution are particularly concerning for Indian families:</p>
    
    <ul>
      <li><strong>Respiratory Issues:</strong> Increased asthma, bronchitis, and respiratory infections, especially in children</li>
      <li><strong>Cardiovascular Problems:</strong> Higher risk of heart disease and stroke</li>
      <li><strong>Vulnerable Populations:</strong> Elderly family members and children are at highest risk</li>
      <li><strong>Pregnancy Concerns:</strong> Potential complications during pregnancy and low birth weight</li>
    </ul>
    
    <h2>AirVita's Solutions for Indian Homes</h2>
    
    <p>AirVita's air purifiers are specifically designed to address the unique air quality challenges faced by Indian families:</p>
    
    <h3>1. Advanced HEPA Filtration</h3>
    <p>Our H13 and H14 HEPA filters remove 99.97% of particles as small as 0.3 microns, including PM2.5, pollen, and smoke particles common in Indian cities.</p>
    
    <h3>2. Activated Carbon Filters</h3>
    <p>Specially designed to absorb odors from cooking, incense, and outdoor pollution, ensuring your home smells fresh and clean.</p>
    
    <h3>3. Smart Air Quality Monitoring</h3>
    <p>Real-time monitoring of PM2.5, PM10, and other pollutants with mobile app integration, allowing you to track and improve your indoor air quality.</p>
    
    <h2>Creating a Healthier Home Environment</h2>
    
    <p>Beyond air purifiers, here are additional steps Indian families can take:</p>
    
    <ul>
      <li>Improve kitchen ventilation with exhaust fans</li>
      <li>Use air purifiers in bedrooms and living areas</li>
      <li>Keep windows closed during high pollution days</li>
      <li>Choose low-VOC cleaning products</li>
      <li>Maintain indoor plants that naturally purify air</li>
    </ul>
    
    <p>Investing in clean air is investing in your family's health. With AirVita's advanced air purification technology, you can create a safe haven from India's air pollution challenges.</p>
  `,
  author: {
    name: "Dr. Sarah Johnson",
    bio: "Environmental health specialist with over 15 years of experience in air quality research, focusing on urban pollution in developing countries.",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  date: "2024-01-15",
  readTime: "5 min read",
  category: "Health",
  image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
  tags: ["Air Quality", "Health", "Indoor Pollution", "HEPA Filters", "India"],
}

const relatedPosts = [
  {
    id: "2",
    title: "HEPA vs ULPA: Understanding Air Filter Technologies",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Creating a Healthier Home Environment",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "The Science Behind Air Purification",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BlogPostPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <Badge variant="outline" className="mb-4">
              {blogPost.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{blogPost.title}</h1>

            <p className="text-xl text-muted-foreground mb-6">{blogPost.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={blogPost.author.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {blogPost.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{blogPost.author.name}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} fill className="object-cover" />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <Separator className="mb-8" />

          {/* Author Bio */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={blogPost.author.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {blogPost.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">About {blogPost.author.name}</h3>
                  <p className="text-muted-foreground mb-4">{blogPost.author.bio}</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Share */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex-1">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" className="flex-1">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" className="flex-1">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-32">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold line-clamp-2 mb-2">{post.title}</h3>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm" className="w-full">
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </article>

      <Footer />
    </div>
  )
}
