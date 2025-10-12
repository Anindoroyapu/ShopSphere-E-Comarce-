"use client";
import React, { useState } from "react";
import HomePage from "./home/HomePage";
import ShopPage from "./shop/ShopPage";
import CategoriesPage from "./categories/CategoriesPage";
import AboutUsPage from "./about/AboutUsPage";
import ContactPage from "./contact/ContactPage";
import CartPage from "./cart/CartPage";
import CheckoutPage from "./checkout/CheckoutPage";
import OrderConfirmationPage from "./confirmation/OrderConfirmationPage";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/Header";
import { CartItem, Category, Product } from "./type";

const HomePageSection = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleCheckout = () => {
    setCurrentPage("checkout");
  };

  const handleBuyNow = (product: Product) => {
    addToCart(product);
    setCurrentPage("checkout");
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <Header
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setSelectedCategory={setSelectedCategory}
        cartCount={cartCount}
      />
      <main>
        {currentPage === "home" && (
          <HomePage
            setCurrentPage={setCurrentPage}
            addToCart={addToCart}
            handleBuyNow={handleBuyNow}
          />
        )}
        {currentPage === "shop" && (
          <ShopPage
            selectedCategory={selectedCategory}
            addToCart={addToCart}
            handleBuyNow={handleBuyNow}
          />
        )}
        {currentPage === "categories" && (
          <CategoriesPage
            setCurrentPage={setCurrentPage}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        {currentPage === "about" && <AboutUsPage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "cart" && (
          <CartPage
            cart={cart}
            updateCartQuantity={updateCartQuantity}
            removeFromCart={removeFromCart}
            handleCheckout={handleCheckout}
          />
        )}
        {currentPage === "checkout" && (
          <CheckoutPage
            cart={cart}
            setCart={setCart}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "orderConfirmation" && (
          <OrderConfirmationPage setCurrentPage={setCurrentPage} />
        )}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default HomePageSection;
