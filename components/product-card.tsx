"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { Star, ShoppingCart, Heart, Eye, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number | null
  image: string
  category: string
  rating: number
  reviews: number
  features: string[]
  roomSize: string
  isPreorder: boolean
  inStock: boolean
  badge?: string | null
}

interface ProductCardProps {
  product: Product
  viewMode?: "grid" | "list"
}

export function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { dispatch } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        isPreorder: product.isPreorder,
      },
    })

    toast({
      title: product.isPreorder ? "Added to Preorder" : "Added to Cart",
      description: `${product.name} has been added to your ${product.isPreorder ? "preorder" : "cart"}.`,
    })
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  if (viewMode === "list") {
    return (
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-48 h-48 md:h-auto">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              {product.badge && <Badge className="absolute top-2 left-2 z-10">{product.badge}</Badge>}
              {discount > 0 && (
                <Badge variant="destructive" className="absolute top-2 right-2 z-10">
                  -{discount}%
                </Badge>
              )}
            </div>

            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <Button variant="ghost" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating > 0 ? `${product.rating} (${product.reviews} reviews)` : "New Product"}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-3">{product.roomSize}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {product.features.slice(0, 3).map((feature) => (
                  <Badge key={feature} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">₹{product.price.toLocaleString("en-IN")}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </Link>
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock && !product.isPreorder}
                    className="min-w-[120px]"
                  >
                    {product.isPreorder ? (
                      <>
                        <Clock className="h-4 w-4 mr-2" />
                        Preorder
                      </>
                    ) : product.inStock ? (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </>
                    ) : (
                      "Out of Stock"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="tilt-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        rotateX: 5,
        rotateY: 5,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card className="overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <div className="relative h-64 overflow-hidden">
            <motion.div animate={{ scale: isHovered ? 1.1 : 1 }} transition={{ duration: 0.3 }}>
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </motion.div>

            {/* Overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/20 flex items-center justify-center"
            >
              <Link href={`/products/${product.id}`}>
                <Button variant="secondary" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Quick View
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.badge && <Badge className="z-10">{product.badge}</Badge>}
            {discount > 0 && (
              <Badge variant="destructive" className="z-10">
                -{discount}%
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>

          {/* Stock Status */}
          {!product.inStock && !product.isPreorder && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
              <Badge variant="secondary" className="text-sm">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>

            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating > 0 ? `(${product.reviews})` : "New"}
              </span>
            </div>

            <p className="text-sm text-muted-foreground">{product.roomSize}</p>

            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature) => (
                <Badge key={feature} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">₹{product.price.toLocaleString("en-IN")}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              {product.inStock && (
                <div className="flex items-center text-green-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  In Stock
                </div>
              )}
            </div>

            <Button onClick={handleAddToCart} disabled={!product.inStock && !product.isPreorder} className="w-full">
              {product.isPreorder ? (
                <>
                  <Clock className="h-4 w-4 mr-2" />
                  Preorder Now
                </>
              ) : product.inStock ? (
                <>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </>
              ) : (
                "Out of Stock"
              )}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
