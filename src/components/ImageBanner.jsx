import { useLocation } from "react-router-dom"

const ImageBanner = () => {
  const location = useLocation()

  // Banner configurations
  const bannerConfig = {
    "/": {
      title: "Discover Premium Quality",
      subtitle: "Curated collection of luxury items for the discerning individual",
      height: "h-96",
      image: "/images/home-banner.jpg",
    },
    "/shop": {
      title: "Our Collection",
      subtitle: "Explore our carefully selected premium products",
      height: "h-64",
      image: "/images/shop-banner.jpg",
    },
    "/about": {
      title: "Our Story",
      subtitle: "Crafting experiences through exceptional quality and design",
      height: "h-64",
      image: "/images/about-banner.jpg",
    },
    "/contact": {
      title: "Get in Touch",
      subtitle: "We're here to help with your luxury shopping experience",
      height: "h-64",
      image: "/images/contact-banner.jpg",
    },
  }

  const config = bannerConfig[location.pathname] || bannerConfig["/"]

  return (
    <div
      className={`relative ${config.height} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${config.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto section-padding">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{config.title}</h1>
        <p className="text-lg md:text-xl">{config.subtitle}</p>
      </div>
    </div>
  )
}

export default ImageBanner
