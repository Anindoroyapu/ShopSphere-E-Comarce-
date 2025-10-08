"use client";
import Link from "next/link";
import { useCart } from "./context/CartContext";

export default function CartDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeFromCart, totalPrice, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-dropdown-overlay" onClick={onClose}>
      <div className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
        <div className="cart-dropdown-header">
          <h3>Your Cart ({itemCount})</h3>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        {items.length === 0 ? (
          <div className="cart-dropdown-empty">
            <p>Your cart is empty.</p>
            <Link href="/shop" className="btn" onClick={onClose}>Start Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-dropdown-items">
              {items.map((item) => (
                <div key={item.id} className="cart-dropdown-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <span>{item.name}</span>
                    <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">&times;</button>
                </div>
              ))}
            </div>
            <div className="cart-dropdown-footer">
              <div className="cart-dropdown-total">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="cart-dropdown-actions">
                <Link href="/cart" className="btn btn-secondary" onClick={onClose}>View Cart</Link>
                <Link href="/cart" className="btn" onClick={onClose}>Checkout</Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
