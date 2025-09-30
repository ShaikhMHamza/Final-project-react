import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: "Email Us", details: "hello@luxestore.com", description: "Send us an email anytime" },
    { icon: Phone, title: "Call Us", details: "+1 (92) 123-4567", description: "Mon-Fri from 9am to 6pm EST" },
    { icon: MapPin, title: "Visit Us", details: "123 Luxury Lane, New York, NY 10001", description: "Our flagship showroom" },
    { icon: Clock, title: "Business Hours", details: "Mon-Sat: 10am-8pm, Sun: 12pm-6pm", description: "Eastern Standard Time" },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="section-padding py-16">
        <div className="container-max text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6"
          >
            We're here to help with your luxury shopping experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-primary-700 leading-relaxed"
          >
            Have a question about our products, need styling advice, or want to learn more about our services? Our team
            is ready to assist you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-primary-50 section-padding py-16">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, i) => {
            const Icon = info.icon
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary-900 mb-2">{info.title}</h3>
                <p className="font-medium text-primary-900 mb-1">{info.details}</p>
                <p className="text-primary-600 text-sm">{info.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Contact Form + FAQ */}
      <section className="section-padding py-16">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="font-serif text-2xl font-bold text-primary-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="w-full px-4 py-3 border border-primary-300 focus:ring-2 focus:ring-primary-500" placeholder="Full Name *" />
                <input className="w-full px-4 py-3 border border-primary-300 focus:ring-2 focus:ring-primary-500" placeholder="Email Address *" />
              </div>
              <input className="w-full px-4 py-3 border border-primary-300 focus:ring-2 focus:ring-primary-500" placeholder="Subject *" />
              <textarea rows={6} className="w-full px-4 py-3 border border-primary-300 focus:ring-2 focus:ring-primary-500" placeholder="Message *" />
              <button type="button" className="btn-primary inline-flex items-center">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </button>
            </form>
          </motion.div>

          {/* FAQ */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary-900 mb-2">What is your return policy?</h4>
                  <p className="text-primary-700">We offer a 30-day return policy. Free returns on orders over $200.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-2">Do you offer international shipping?</h4>
                  <p className="text-primary-700">Yes, we ship worldwide. Rates and delivery times vary.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-2">Can I schedule a personal shopping session?</h4>
                  <p className="text-primary-700">Contact us to book a one-on-one consultation with our experts.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-100 p-6">
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-3">Need immediate assistance?</h4>
              <p className="text-primary-700 mb-4">For urgent inquiries, call us or visit our store. We're ready to help.</p>
              <p className="text-sm text-primary-600"><strong>Phone:</strong> +1 (123) 123-4567</p>
              <p className="text-sm text-primary-600"><strong>Hours:</strong> Mon-Fri 9am-6pm EST</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
