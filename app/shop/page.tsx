import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function ShopPage() {
  return <ProductGrid items={products} title="All Products" />;
}