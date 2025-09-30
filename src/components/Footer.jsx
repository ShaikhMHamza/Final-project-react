import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-900"></div>
              </div>
              <span className="font-serif text-xl font-semibold">LUXE STORE</span>
            </Link>
            <p className="text-primary-300 max-w-md leading-relaxed">
              Curating premium products with exceptional quality and timeless design. Experience luxury that transcends
              trends and embraces sophistication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-primary-300 hover:text-white transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-400 text-sm">© 2025 Luxe Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
