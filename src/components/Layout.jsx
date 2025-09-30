import { useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Breadcrumbs from "./Breadcrumbs"
import ImageBanner from "./ImageBanner"

const Layout = ({ children }) => {
  const location = useLocation()
  const isCartPage = location.pathname === "/cart"
  const isCheckoutPage = location.pathname === "/checkout"
  const showBanner = !isCartPage && !isCheckoutPage

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {showBanner && (
        <div className="relative">
          <Breadcrumbs />
          <ImageBanner />
        </div>
      )}

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
