import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

// ✅ Import images from assets
import roofingSheets from "@/assets/jsw-group-logo-hd.png";
import tataSteelLogo from "@/assets/tata-steel-logo-hd.png";
import jswSteelLogo from "@/assets/jsw-group-logo-hd.png";

const Roofing = () => {
  const products = [
    { name: "Corrugated Roofing Sheets", desc: "Strong, durable, weather-resistant", colors: "Blue, Red, Green, Silver", icon: "🏠" },
    { name: "Color Coated Sheets", desc: "Attractive finish, long-lasting", colors: "Multiple colors available", icon: "🎨" },
    { name: "Galvanized Iron Sheets", desc: "Rust-proof, economical option", colors: "Silver/Gray", icon: "⚙️" },
    { name: "Polycarbonate Sheets", desc: "Transparent, UV protected", colors: "Clear, Tinted", icon: "☀️" },
  ];

  const services = [
    { icon: "📏", title: "Free Measurement", desc: "We measure your roof area" },
    { icon: "💰", title: "Best Quotes", desc: "Competitive pricing guaranteed" },
    { icon: "✅", title: "Quality Check", desc: "Post-installation inspection" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0">
          <img src={roofingSheets} alt="Roofing sheets" className="w-full h-full object-cover opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-5">
                🏠 Sri Amman <span className="text-accent">Roofing</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-semibold">Strong Roofing Solutions</p>
              <p className="text-xl mb-8 text-gray-100">
                Corrugated Sheets | Color Coated | GI Sheets
              </p>
              <p className="text-lg mb-8 bg-accent/20 backdrop-blur-sm p-4 rounded-lg inline-block">
                ☔ Weather Resistant | 💪 Long Lasting | 🛡️ Warranty Included
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+9170103333603">
                  <Button size="lg" variant="secondary" className="gap-3 text-xl py-7 px-8">
                    📞 Get Free Quote
                  </Button>
                </a>
                <a href="https://wa.me/9170103333603" target="_blank" rel="noopener noreferrer">
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
            Roofing <span className="text-primary">Products</span>
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">Quality Sheets for Every Need</p>

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
                <p className="text-muted-foreground text-center text-lg mb-3">{product.desc}</p>
                <p className="text-primary font-semibold text-center text-lg">{product.colors}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Complete Roofing Solution from Start to Finish
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-lg text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our <span className="text-primary">Partners</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <motion.img
              src={tataSteelLogo}
              alt="Tata Steel"
              className="h-20 object-contain"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src={jswSteelLogo}
              alt="JSW Steel"
              className="h-20 object-contain"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card p-10 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-8">
              Get Your <span className="text-primary">Free Quote</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Visit Our Store</h3>
                  <p className="text-xl text-muted-foreground">
                    Kanagagiri, Kakapalayam Tamil Nadu 637504
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Call Us</h3>
                  <a href="tel:+9170103333603" className="text-xl text-primary hover:underline">
                    +91 70103 33603
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a href="tel:+9170103333603" className="block">
                <Button className="w-full text-xl py-7">📞 Call for Quote</Button>
              </a>
              <a href="https://wa.me/9170103333603" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full text-xl py-7 bg-green-50 hover:bg-green-100">
                  💬 WhatsApp Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Roofing;
