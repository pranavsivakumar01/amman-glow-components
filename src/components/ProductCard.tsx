import { motion } from "framer-motion";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      className="bg-card rounded-lg shadow-md overflow-hidden group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden bg-muted">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
            {discount}% OFF
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
        <motion.button
          className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className="h-5 w-5 text-muted-foreground hover:text-destructive" />
        </motion.button>
      </div>

      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex text-accent">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < product.rating ? "text-accent" : "text-muted"}>★</span>
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">({product.rating}.0)</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
              )}
            </div>
          </div>
          
          <Button 
            size="sm" 
            className="gap-2"
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
