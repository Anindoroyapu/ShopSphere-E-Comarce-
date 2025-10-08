"use client";
import React, { createContext, useState, useContext } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

type CartItem = Product & { quantity: number };

type CartContextType = {
  items: CartItem[];
  addToCart: (p: Product) => void;
  updateQuantity: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
  itemCount: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, qty: number) => {
    if (qty < 1) removeFromCart(id);
    else {
      setCartItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
      );
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        itemCount: cartItems.reduce((t, i) => t + i.quantity, 0),
        totalPrice: cartItems.reduce((t, i) => t + i.price * i.quantity, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};