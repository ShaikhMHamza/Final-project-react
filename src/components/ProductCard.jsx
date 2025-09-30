import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingBag, Heart } from "lucide-react"
import { useCart } from "../context/CartContext"

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = async () => {
    setIsAdding(true)
    addToCart(product)

    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <motion.div
      className="group relative bg-white border border-primary-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-square overflow-hidden bg-primary-50">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
        >
          <div className="flex space-x-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-2 rounded-full transition-all duration-200 ${
                isLiked ? "bg-red-500 text-white" : "bg-white text-primary-900 hover:bg-primary-100"
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
            </button>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="p-2 bg-primary-900 text-white rounded-full hover:bg-primary-800 transition-all duration-200 disabled:opacity-50"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div className="absolute top-3 left-3">
          <span className="bg-white/90 text-primary-900 text-xs font-medium px-2 py-1 tracking-wide">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-serif text-lg font-semibold text-primary-900 mb-2 text-balance">{product.name}</h3>
        <p className="text-primary-600 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-xl text-primary-900">${product.price}</span>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`btn-primary text-sm px-4 py-2 transition-all duration-200 ${
              isAdding ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
