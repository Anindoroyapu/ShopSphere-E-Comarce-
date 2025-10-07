import { products } from "@/component/data/products";
import ProductGrid from "@/component/ProductGrid";

export default function ShopPage() {
  return <ProductGrid items={products} title="All Products" />;
}
