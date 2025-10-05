import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin, Package, Ruler, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import steelProducts from "@/assets/steel-products.jpg";

const Steel = () => {
  const products = [
    {
      name: "Steel Rods (TMT Bars)",
      sizes: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm",
      desc: "High-strength TMT bars for construction",
      icon: "🔩",
    },
    {
      name: "Steel Sheets",
      sizes: "Various thickness available",
      desc: "Durable steel sheets for roofing & walls",
      icon: "📋",
    },
    {
      name: "Steel Angles",
      sizes: "L-shaped structural steel",
      desc: "Perfect for framework and support",
      icon: "📐",
    },
   
  ];

  const features = [
    { icon: "✅", title: "ISI Certified", desc: "All products meet quality standards" },
    { icon: "💪", title: "High Strength", desc: "Premium grade steel materials" },
    { icon: "📏", title: "Custom Cutting", desc: "Cut to your exact specifications" },
    { icon: "🚚", title: "Bulk Orders", desc: "Special rates for large quantities" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-r from-gray-800 to-gray-600">
        <div className="absolute inset-0">
          <img
            src={steelProducts}
            alt="Steel products"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                🏗️ Sri Amman <span className="text-accent">Steel</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-bold">
                High-Quality Steel Products
              </p>
              <p className="text-xl mb-8 text-gray-100">
                TMT Bars | Steel Sheets | Angles | Beams | Construction Materials
              </p>
              <p className="text-lg mb-8 bg-accent/20 backdrop-blur-sm p-4 rounded-lg inline-block">
                ⚡ Competitive Prices | ✅ ISI Certified | 🚚 Fast Delivery
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919443780923">
                  <Button size="lg" variant="secondary" className="gap-3 text-xl py-7 px-8">
                    📞 Call for Quote
                  </Button>
                </a>
                <a href="https://wa.me/919443780923" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-3 text-xl py-7 px-8 bg-green-600 hover:bg-green-700">
                    💬 WhatsApp Us
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Steel <span className="text-primary">Products</span>
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Complete Range for Your Construction Needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-lg shadow-lg border-2 border-border hover:border-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-6xl mb-4 text-center">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-center">{product.name}</h3>
                <p className="text-lg text-primary font-semibold mb-3 text-center">
                  {product.sizes}
                </p>
                <p className="text-muted-foreground text-center text-lg">
                  {product.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl mb-6 font-semibold">
              Need a specific size or quantity?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+919876543210">
                <Button size="lg" className="gap-3 text-xl py-7 px-8">
                  📞 Call for Custom Order
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-3 text-xl py-7 px-8">
                  📍 Visit Our Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose Our <span className="text-primary">Steel?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-lg text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bulk Orders? Special Rates Available!
              </h2>
              <p className="text-2xl mb-8">
                Get the best prices for large construction projects. Contact us for a customized quote.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+919876543210">
                  <Button size="lg" variant="secondary" className="gap-3 text-xl py-7 px-8">
                    📞 Call for Bulk Pricing
                  </Button>
                </a>
                <a href="https://wa.me/919443780923" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="gap-3 text-xl py-7 px-8 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
                    💬 WhatsApp Quote
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Visit Our <span className="text-primary">Store</span>
          </h2>

          <div className="max-w-2xl mx-auto bg-card p-10 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Address</h3>
                  <p className="text-xl text-muted-foreground">
                    Kanagagiri, Kakapalayam Tamil Nadu 637504
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Phone</h3>
                  <a href="tel:+919443780923" className="text-xl text-primary hover:underline">
                    +91 9443780923
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Package className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Business Hours</h3>
                  <p className="text-xl text-muted-foreground">
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sunday: Holiday 
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t space-y-3">
              <a href="tel:+919443780923" className="block">
                <Button className="w-full text-xl py-7">📞 Call Now</Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="w-full text-xl py-7">
                  📍 Get Directions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Steel;
