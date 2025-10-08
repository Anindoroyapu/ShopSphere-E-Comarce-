import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Style</h1>
          <p>Browse our new collection and find your next favorite outfit.</p>
          <a href="/shop" className="btn">Shop Now</a>
        </div>
      </section>
      <ProductGrid items={products.slice(0, 4)} title="Featured Products" />
    </>
  );
}