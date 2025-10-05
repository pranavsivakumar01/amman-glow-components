import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const branches = [
  {
    business: "Sri Amman Electricals",
    location: "Main Branch",
    address: "Sankari Main Rd, Magudanchavadi, Tamil Nadu 637103",
    phone: "+91 9788005235",
    icon: "⚡",
  },
  {
    business: "Sri Amman Electricals",
    location: "Branch 2 ",
    address: "Vaikundam, Sangagiri to Salem Main Rd  NH47 Tamil Nadu 637103",
    phone: "+91 7947130302",
    icon: "⚡",
  },
  {
    business: "Sri Amman Electricals",
    location: "Branch 3 ",
    address: "Main Road, Mallasamudram, Tamil Nadu 638315",
    phone: "+91 9488989901",
    icon: "⚡",
  },
  {
    business: "Sri Amman Steel",
    location: "Sankari",
    address: "Kanagagiri, Kakapalayam Tamil Nadu 637504",
    phone: "+91 9443357881",
    icon: "🏗️",
  },
  {
    business: "Sri Amman Roofing",
    location: "Sankari",
    address: "Kanagagiri, Kakapalayam Tamil Nadu 637504",
    phone: "+91 70103 33603",
    icon: "🏠",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4">We're Here to Help You</p>
            <p className="text-xl max-w-2xl mx-auto">
              Visit our branches, call us, or see our location on the map.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+917010333603">
              <Button size="lg" className="gap-3 text-xl py-7 px-8">
                📞 Call Now
              </Button>
            </a>
            <a
              href="https://wa.me/917010333603"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gap-3 text-xl py-7 px-8 bg-green-600 hover:bg-green-700"
              >
                💬 WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our <span className="text-primary">Location</span>
          </h2>
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.135030751144!2d77.9883468!3d11.5466035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe1627f7cf6e3%3A0x10ea2977ce658e84!2sSri%20Amman%20Electricals!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Amman Electricals Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our <span className="text-primary">Branches</span>
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Visit any of our locations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="text-5xl mb-4">{branch.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {branch.business}
                </h3>
                <p className="text-lg font-semibold mb-4">{branch.location}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{branch.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-accent" />
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-primary hover:underline"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href={`tel:${branch.phone}`} className="block">
                    <Button className="w-full">📞 Call</Button>
                  </a>
                  <a
                    href={`https://wa.me/${branch.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full bg-green-50 hover:bg-green-100"
                    >
                      💬 WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
