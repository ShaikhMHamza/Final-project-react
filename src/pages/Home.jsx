import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { fetchProducts } from "../services/api"
import ProductCard from "../components/ProductCard"

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        setIsLoading(true)
        const products = await fetchProducts()
        setFeaturedProducts(products.slice(0, 4))
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    loadFeaturedProducts()
  }, [])

  return (
    <div className="animate-fade-in">
      <section className="section-padding py-16 md:py-24">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 text-balance"
            >
              Optimal organization meets exquisite design
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-700 mb-8 leading-relaxed text-pretty"
            >
              Transform your lifestyle with our curated collection of premium products, where exceptional quality meets
              timeless sophistication.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/shop" className="btn-primary inline-flex items-center justify-center">
                Explore Collection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                Learn Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4">Featured Products</h3>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto text-pretty">
              Discover our handpicked selection of premium products that embody quality and sophistication.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-square bg-primary-200 mb-4"></div>
                  <div className="h-4 bg-primary-200 mb-2"></div>
                  <div className="h-4 bg-primary-200 w-2/3"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-primary-600 mb-4">Unable to load featured products</p>
              <button onClick={() => window.location.reload()} className="btn-secondary">
                Try Again
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Link to="/shop" className="btn-secondary inline-flex items-center">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-primary-50 section-padding py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-6">Our Core Principles</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Premium Quality</h4>
                    <p className="text-primary-700 leading-relaxed">
                      Every product is carefully selected for exceptional craftsmanship and enduring value.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">Timeless Design</h4>
                    <p className="text-primary-700 leading-relaxed">
                      Our collection features classic aesthetics that transcend fleeting trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary-200 rounded-none overflow-hidden">
                <img
                  src="/luxury-lifestyle-products.jpg"
                  alt="Premium lifestyle products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-16">
        <div className="container-max">
          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4">Experience Luxury Today</h3>
            <p className="text-lg text-primary-700 mb-8 max-w-2xl mx-auto text-pretty">
              Join thousands of satisfied customers who have elevated their lifestyle with our premium collection.
            </p>
            <Link to="/shop" className="btn-primary inline-flex items-center">
              Start Shopping
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
