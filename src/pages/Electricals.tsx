import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin, Lightbulb, Fan, Cable, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import electricalShowroom from "@/assets/electrical-showroom.jpg";
import ledLight from "@/assets/product-led-light.jpg";
import switchImage from "@/assets/product-switch.jpg";
import cableImage from "@/assets/product-cable.jpg";
import breakerImage from "@/assets/product-breaker.jpg";

const Electricals = () => {
  const branches = [
    {
      name: "Main Branch - Magudanchavadi",
      address: "Sangagiri Main Rd, Magudanchavadi, Tamil Nadu 637103 Salem NH-47",
      phone: "+91 9788005235",
    },
    {
      name: "Branch 2 - Vaikundam",
      address: "Vaikundam, Sangagiri to Salem Main Rd  NH47 Tamil Nadu 637103",
      phone: "+91 7947130302",
    },
    {
      name: "Branch 3 - Mallasamudram",
      address: "Main Road, Mallasamudram, Tamil Nadu 638315",
      phone: "+91 9488989901",
    },
  ];

  const categories = [
    { icon: Lightbulb, name: "Lighting Solutions", desc: "LEDs, bulbs, tube lights" },
    { icon: Fan, name: "Home Appliances", desc: "Fans, water heaters, geysers" },
    { icon: Cable, name: "Wires & Cables", desc: "Copper wires, flexible cables" },
    { icon: Shield, name: "Safety Equipment", desc: "MCBs, breakers, switches" },
  ];

  const sampleProducts = [
    { name: "LED Ceiling Light 24W", image: ledLight },
    { name: "Modular Switch Plate", image: switchImage },
    { name: "Copper Wire Cable 2.5mm²", image: cableImage },
    { name: "MCB Circuit Breaker 32A", image: breakerImage },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden bg-gradient-to-r from-black to-black/80">
        <div className="absolute inset-0">
          <img
            src={electricalShowroom}
            alt="Electrical showroom"
            className="w-full h-full object-cover opacity-20"
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
                ⚡ Sri Amman <span className="text-accent">Electricals</span>
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-semibold">
                Premium Electrical Products
              </p>
              <p className="text-xl mb-8 text-gray-100">
                Home Appliances | Wiring Solutions | Industrial Equipment | Lighting | Safety Devices
              </p>
              <p className="text-lg mb-8 bg-accent/20 backdrop-blur-sm p-4 rounded-lg inline-block">
                📍 3 Branches Across Tamil Nadu
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919443357881">
                  <Button size="lg" variant="secondary" className="gap-3 text-xl py-7 px-8">
                    📞 Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919443357881" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-3 text-xl py-7 px-8 bg-green-600 hover:bg-green-700">
                    💬 WhatsApp Us
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Product <span className="text-primary">Categories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <category.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-lg">{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            7500+ Electrical Products | 5000+ Happy Customers
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Visit Our <span className="text-primary">Branches</span>
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            3 Locations to Serve You Better
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{branch.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-accent" />
                    <a href={`tel:${branch.phone}`} className="text-lg hover:text-primary">
                      {branch.phone}
                    </a>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <a href={`tel:${branch.phone}`} className="block">
                    <Button className="w-full text-lg py-6">📞 Call This Branch</Button>
                  </a>
                  <a
                    href={`https://wa.me/${branch.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" className="w-full text-lg py-6 bg-green-50 hover:bg-green-100">
                      💬 WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Choose <span className="text-primary">Us?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "✅", title: "Genuine Products", desc: "100% authentic brands" },
              { icon: "💰", title: "Best Prices", desc: "Competitive rates guaranteed" },
              { icon: "🚚", title: "Fast Delivery", desc: "Quick service across TN" },
              { icon: "🛡️", title: "Warranty", desc: "Full manufacturer warranty" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Electrical Solutions?
          </h2>
          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            7500+ Products • 5000+ Customers • Trusted Across Tamil Nadu
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-3 text-xl py-7 px-8">
                📍 Find Us
                <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
            <a href="tel:+919788005235">
              <Button
                size="lg"
                variant="outline"
                className="gap-3 text-xl py-7 px-8 bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary"
              >
                📞 Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Electricals;
