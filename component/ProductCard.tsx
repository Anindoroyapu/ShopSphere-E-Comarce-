"use client";

import { useCart } from "./context/CartContext";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <button onClick={() => addToCart(product)} className="btn add-to-cart-btn">Add to Cart</button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
