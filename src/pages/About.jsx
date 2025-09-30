import { motion } from "framer-motion"
import { Award, Users, Globe, Heart } from "lucide-react"

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Every product is carefully selected for exceptional craftsmanship and enduring value.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our dedicated team ensures every customer receives personalized service and support.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Sourcing the finest products from artisans and designers around the world.",
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description: "Our love for beautiful, functional design drives everything we do.",
    },
  ]

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Premium Products" },
    { number: "50+", label: "Global Partners" },
    { number: "5", label: "Years Experience" },
  ]

  return (
    <div className="animate-fade-in">
      <section className="section-padding py-16">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6 text-balance"
            >
              Crafting experiences through exceptional quality and design
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-primary-700 leading-relaxed text-pretty"
            >
              Founded on the belief that luxury should be accessible, we curate a collection of premium products that
              blend timeless design with modern functionality. Our journey began with a simple mission: to bring you the
              finest quality items that enhance your lifestyle and reflect your sophisticated taste.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="bg-primary-900 text-white section-padding py-16">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-300 text-sm tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto text-pretty">
              These principles guide every decision we make and every product we choose to feature in our collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-900" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-primary-900 mb-3">{value.title}</h4>
                  <p className="text-primary-600 leading-relaxed text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary-50 section-padding py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-primary-700 leading-relaxed">
                <p>
                  What started as a passion project in 2019 has grown into a trusted destination for discerning
                  customers who appreciate quality and craftsmanship. We believe that every item in your life should
                  serve a purpose and bring you joy.
                </p>
                <p>
                  Our team travels the world to discover unique pieces from talented artisans and established designers
                  alike. We're committed to sustainable practices and ethical sourcing, ensuring that our beautiful
                  products have a positive impact on the communities that create them.
                </p>
                <p>
                  Today, we're proud to serve customers across the globe, helping them curate spaces and wardrobes that
                  reflect their personal style and values.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary-200 overflow-hidden">
                <img
                  src="/about-story-image.jpg"
                  alt="Our story and craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-16">
        <div className="container-max">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4">Meet Our Team</h3>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto text-pretty">
              The passionate individuals behind Luxe Store, dedicated to bringing you exceptional products and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & Creative Director",
                image: "/team-sarah.jpg",
              },
              {
                name: "Marcus Rodriguez",
                role: "Head of Curation",
                image: "/team-marcus.jpg",
              },
              {
                name: "Elena Kowalski",
                role: "Customer Experience Lead",
                image: "/team-sarah.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-square bg-primary-200 mb-4 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-serif text-lg font-semibold text-primary-900 mb-1">{member.name}</h4>
                <p className="text-primary-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
