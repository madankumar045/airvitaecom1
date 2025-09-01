"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, AlertCircle } from "lucide-react"
import Link from "next/link"

// Mock product data (same as products page)
const products = [
  {
    id: "1",
    name: "AirPure Pro Max",
    price: 599,
    originalPrice: 799,
    image: "/placeholder.svg?height=300&width=300",
    category: "Premium",
    rating: 4.9,
    reviews: 1247,
    features: ["HEPA H13", "Smart Sensors", "App Control", "UV-C Light"],
    roomSize: "Large (up to 800 sq ft)",
    isPreorder: false,
    inStock: true,
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "EcoBreeze Compact",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=300&width=300",
    category: "Compact",
    rating: 4.7,
    reviews: 892,
    features: ["HEPA H12", "Quiet Mode", "LED Display"],
    roomSize: "Small (up to 300 sq ft)",
    isPreorder: false,
    inStock: true,
    badge: "Eco Choice",
  },
  {
    id: "3",
    name: "CleanAir Elite",
    price: 899,
    originalPrice: 1199,
    image: "/placeholder.svg?height=300&width=300",
    category: "Premium",
    rating: 4.8,
    reviews: 634,
    features: ["HEPA H14", "AI Control", "Voice Assistant", "Air Quality Display"],
    roomSize: "Extra Large (up to 1200 sq ft)",
    isPreorder: false,
    inStock: true,
    badge: "Premium",
  },
]

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const searchResults = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.features.some((feature) => feature.toLowerCase().includes(query.toLowerCase())) ||
      product.category.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          <p className="text-muted-foreground">{query ? `Results for "${query}"` : "Please enter a search term"}</p>
        </div>

        {query && (
          <>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                {searchResults.length} product{searchResults.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="text-center py-12">
                  <CardContent className="space-y-4">
                    <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto" />
                    <h3 className="text-xl font-semibold">Product not available</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We couldn't find any products matching "{query}". Try searching with different keywords or browse
                      our categories.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                      <Link href="/products">
                        <Button>
                          <Search className="h-4 w-4 mr-2" />
                          Browse All Products
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline">Contact Support</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </>
        )}

        {!query && (
          <Card className="text-center py-12">
            <CardContent className="space-y-4">
              <Search className="h-16 w-16 text-muted-foreground mx-auto" />
              <h3 className="text-xl font-semibold">Start your search</h3>
              <p className="text-muted-foreground">
                Enter a product name, feature, or category to find what you're looking for.
              </p>
              <Link href="/products">
                <Button>Browse All Products</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  )
}

function SearchFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-muted rounded w-1/3"></div>
        <div className="h-4 bg-muted rounded w-1/2"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-96 bg-muted rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Suspense fallback={<SearchFallback />}>
        <SearchResults />
      </Suspense>
      <Footer />
    </div>
  )
}
