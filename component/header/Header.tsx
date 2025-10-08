"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartDropdown from "../CartDropdown";


const LogoIcon = () => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const UserIcon = () => (
  <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default function Header() {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <LogoIcon /> ShopSphere
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/cart">Cart</Link>
        </nav>
        <div className="header-icons">
          <UserIcon />
          <button onClick={() => setIsCartOpen(true)} className="cart-icon-button">
            🛒 {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </button>
        </div>
      </div>
      <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
