import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="section-padding py-16">
        <div className="container-max">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-primary-400" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-primary-600 mb-8 leading-relaxed">
              Discover our curated collection of premium products and add some
              items to your cart.
            </p>
            <Link to="/shop" className="btn-primary inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding py-12">
      <div className="container-max">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl font-bold text-primary-900">
            Shopping Cart
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white border border-primary-200 p-6 flex flex-col sm:flex-row gap-4"
                  >
                    <div className="w-full sm:w-24 h-48 sm:h-24 bg-primary-50 overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-serif text-lg font-semibold text-primary-900 mb-1">
                            {item.name}
                          </h3>
                          <p className="text-primary-600 text-sm mb-2">
                            {item.category}
                          </p>
                          <p className="font-semibold text-primary-900">
                            ${item.price}
                          </p>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="flex items-center border border-primary-300">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-2 hover:bg-primary-100 transition-colors duration-200"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 hover:bg-primary-100 transition-colors duration-200"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-primary-200">
                        <div className="flex justify-between items-center">
                          <span className="text-primary-600">Subtotal:</span>
                          <span className="font-semibold text-primary-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-primary-50 border border-primary-200 p-6 sticky top-24">
              <h2 className="font-serif text-xl font-semibold text-primary-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-primary-600">Subtotal:</span>
                  <span className="font-medium text-primary-900">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-600">Shipping:</span>
                  <span className="font-medium text-primary-900">Free</span>
                </div>
                <div className="border-t border-primary-300 pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-primary-900">
                      Total:
                    </span>
                    <span className="font-bold text-xl text-primary-900">
                      ${getCartTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full btn-primary">
                  Proceed to Checkout
                </button>
                <Link
                  to="/shop"
                  className="w-full btn-secondary text-center block"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-primary-300">
                <div className="flex items-center justify-center space-x-2 text-primary-600 text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
