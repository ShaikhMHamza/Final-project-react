import React from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronRight } from "lucide-react"

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)

  const breadcrumbNames = {
    shop: "Shop",
    about: "About",
    contact: "Contact",
    cart: "Cart",
  }

  if (pathnames.length === 0) {
     return // (
    //   <div className="bg-primary-50 border-b border-primary-200">
    //     <div className="container-max section-padding py-4">
    //       <nav className="flex items-center space-x-2 text-sm">
    //         <Link to="/" className="text-primary-600 hover:text-primary-900 transition-colors duration-200">
    //           Home
    //         </Link>
    //       </nav>
    //     </div>
    //   </div>
    // )
  }

  return (
    <div className="bg-primary-50 border-b border-primary-200">
      <div className="container-max section-padding py-4">
        <nav className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-primary-600 hover:text-primary-900 transition-colors duration-200">
            Home
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
            const isLast = index === pathnames.length - 1
            const displayName = breadcrumbNames[name] || name.charAt(0).toUpperCase() + name.slice(1)

            return (
              <React.Fragment key={name}>
                <ChevronRight className="w-4 h-4 text-primary-400" />
                {isLast ? (
                  <span className="text-primary-900 font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-primary-600 hover:text-primary-900 transition-colors duration-200">
                    {displayName}
                  </Link>
                )}
              </React.Fragment>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Breadcrumbs
