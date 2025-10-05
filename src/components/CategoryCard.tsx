import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  productCount: number;
  image?: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon = category.icon;

  return (
    <Link to={`/categories/${category.id}`}>
      <motion.div
        className="bg-card rounded-lg shadow-md p-6 text-center group cursor-pointer border border-border"
        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)" }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="h-10 w-10 text-primary" />
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {category.productCount} Products
        </p>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
