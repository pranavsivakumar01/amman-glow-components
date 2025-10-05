import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import groupHero from "@/assets/group-hero.jpg";

// Import logos (replace with your actual logo files later)
import lntLogo from "@/assets/asian-paints-logo-hd.png";
import cromptonLogo from "@/assets/crompton-logo-hd.png";
import orientLogo from "@/assets/orient-electric-logo-hd.png";
import philipsLogo from "@/assets/philips-logo-hd.png";
import polycabLogo from "@/assets/larsen-and-toubro-logo-hd.png";

import jswLogo from "@/assets/jsw-group-logo-hd.png";
import tataLogo from "@/assets/tata-steel-logo-hd.png";
import kamatchiLogo from "@/assets/ultratech-cement-logo-hd.png";

const Index = () => {
  const businesses = [
    {
      id: "electricals",
      name: "Sri Amman Electricals",
      icon: "⚡",
      description: "Home appliances, wiring, lighting, and industrial electrical solutions",
      branches: "3 Branches",
      path: "/electricals",
    },
    {
      id: "steel",
      name: "Sri Amman Steel",
      icon: "🏗️",
      description: "High-quality steel rods, sheets, and construction materials",
      branches: "1 Branch",
      path: "/steel",
    },
    {
      id: "roofing",
      name: "Sri Amman Roofing",
      icon: "🏠",
      description: "Strong roofing sheets ",
      branches: "1 Branch",
      path: "/roofing",
    },
  ];

  // Combine all brand logos into one array for continuous flow
  const allBrands = [
    lntLogo,
    cromptonLogo,
    orientLogo,
    philipsLogo,
    polycabLogo,
    jswLogo,
    tataLogo,
    kamatchiLogo,
  ];

  // Motion settings for infinite scroll
  const scrollVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" },
      },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={groupHero}
            alt="Sri Amman Groups"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Sri Amman <span className="text-accent">Groups</span>
              </h1>
              <p className="text-3xl md:text-4xl mb-6 font-bold">
                Strong Connections, Stronger Future
              </p>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Your trusted partner for Electrical • Steel • Roofing solutions
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919443357881">
                  <Button size="lg" className="gap-3 text-xl py-8 px-10">
                    📞 Call Now
                  </Button>
                </a>
                <a
                  href="https://wa.me/919443357881"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="gap-3 text-xl py-8 px-10 bg-green-600 hover:bg-green-700"
                  >
                    💬 WhatsApp Us
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Businesses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Our <span className="text-primary">Businesses</span>
          </h2>
          <p className="text-center text-2xl text-muted-foreground mb-16">
            Complete solutions for all your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link to={business.path}>
                  <div className="bg-card p-10 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-border hover:border-primary h-full group">
                    <div className="text-7xl mb-6 text-center group-hover:scale-110 transition-transform">
                      {business.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-center group-hover:text-primary transition-colors">
                      {business.name}
                    </h3>
                    <p className="text-lg text-muted-foreground text-center mb-4">
                      {business.description}
                    </p>
                    <p className="text-accent font-semibold text-center text-xl mb-6">
                      📍 {business.branches}
                    </p>
                    <Button className="w-full text-xl py-7 gap-2">
                      Learn More
                      <ArrowRight className="h-6 w-6" />
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos Carousel (continuous flow) */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Our <span className="text-primary">Brands</span>
          </h2>

          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-16"
              variants={scrollVariants}
              animate="animate"
            >
              {allBrands.concat(allBrands).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="brand"
                  className="h-24 object-contain"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-black to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-black/30 inline-block px-6 py-2 rounded-lg">
            Ready to Get Started?
          </h2>
          <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto">
            Visit our branches or contact us for expert advice and quality products
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="gap-3 text-2xl py-8 px-10"
              >
                📍 Contact Us
                <ArrowRight className="h-7 w-7" />
              </Button>
            </Link>
            <a href="tel:+919443357881">
              <Button
                size="lg"
                variant="outline"
                className="gap-3 text-2xl py-8 px-10 bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary"
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

export default Index;
