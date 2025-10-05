import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold text-primary">
                Sri Amman <span className="text-accent">Groups</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-foreground hover:text-primary px-4 py-2 rounded-md text-base font-medium transition-colors">
                Home
              </Link>
              <Link to="/electricals" className="text-foreground hover:text-primary px-4 py-2 rounded-md text-base font-medium transition-colors">
                Electricals
              </Link>
              <Link to="/steel" className="text-foreground hover:text-primary px-4 py-2 rounded-md text-base font-medium transition-colors">
                Steel
              </Link>
              <Link to="/roofing" className="text-foreground hover:text-primary px-4 py-2 rounded-md text-base font-medium transition-colors">
                Roofing
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary px-4 py-2 rounded-md text-base font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right side CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+919443357881">
              <Button variant="outline" size="lg" className="gap-2 text-base">
                📞 Call Now
              </Button>
            </a>
            
            <a href="https://wa.me/919443357881" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="gap-2 text-base bg-green-600 hover:bg-green-700">
                💬 WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-background shadow-lg border-t">
            <Link to="/" 
                  className="text-foreground hover:text-primary block px-4 py-3 rounded-md text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}>
              🏠 Home
            </Link>
            <Link to="/electricals" 
                  className="text-foreground hover:text-primary block px-4 py-3 rounded-md text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}>
              ⚡ Electricals
            </Link>
            <Link to="/steel" 
                  className="text-foreground hover:text-primary block px-4 py-3 rounded-md text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}>
              🏗️ Steel
            </Link>
            <Link to="/roofing" 
                  className="text-foreground hover:text-primary block px-4 py-3 rounded-md text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}>
              🏠 Roofing
            </Link>
            <Link to="/contact" 
                  className="text-foreground hover:text-primary block px-4 py-3 rounded-md text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}>
              📞 Contact Us
            </Link>
            <div className="pt-3 space-y-2">
              <a href="tel:+919443357881" className="block">
                <Button className="w-full text-lg py-6" size="lg">
                  📞 Call Now
                </Button>
              </a>
              <a href="https://wa.me/9443357881" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full text-lg py-6 bg-green-600 hover:bg-green-700" size="lg">
                  💬 WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
