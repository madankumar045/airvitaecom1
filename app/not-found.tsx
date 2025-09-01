import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <Card>
            <CardContent className="p-8">
              <div className="text-6xl font-bold text-primary mb-4">404</div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>

              <p className="text-gray-600 mb-6">
                Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
              </p>

              <div className="space-y-3">
                <Link href="/" className="block">
                  <Button className="w-full">
                    <Home className="h-4 w-4 mr-2" />
                    Go Home
                  </Button>
                </Link>

                <Link href="/products" className="block">
                  <Button variant="outline" className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Browse Products
                  </Button>
                </Link>

                <Link href="/" className="block">
                  <Button variant="ghost" className="w-full">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Go Back
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
