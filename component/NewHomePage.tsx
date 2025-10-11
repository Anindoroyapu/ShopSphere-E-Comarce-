"use client";
import Image, { type StaticImageData } from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import banner from "@/public/banner.png";
import { allProducts } from "./Product";

type Category = "Apparel" | "Footwear" | "Accessories";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string | StaticImageData;
  category: Category;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const featuredProducts = allProducts.slice(0, 4);

const categoryData = {
  Apparel:
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop",
  Footwear:
    "https://images.unsplash.com/photo-1557870189-2765a0834a78?q=80&w=2670&auto=format&fit=crop",
  Accessories:
    "https://images.unsplash.com/photo-1576053139997-f8563a483375?q=80&w=2670&auto=format&fit=crop",
};

const categories: Category[] = ["Apparel", "Footwear", "Accessories"];

interface HeaderProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
  setSelectedCategory: (category: Category | null) => void;
  cartCount: number;
}

const Header = ({
  setCurrentPage,
  currentPage,
  setSelectedCategory,
  cartCount,
}: HeaderProps) => {
  const navigate = (page: string) => {
    if (page === "shop") {
      setSelectedCategory(null);
    }
    setCurrentPage(page);
  };

  return (
    <header className="bg-[#0B1A3A] py-4 border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex justify-between items-center">
          <div
            className="flex items-center text-xl font-semibold text-gray-800 cursor-pointer"
            onClick={() => navigate("home")}
          >
            <div className="inline-block size-20 mr-7 h-12 transform scale-150 -mt-12 origin-left">
              <Image
                src={logo}
                alt="LiveFlashback Logo"
                width={150}
                height={50}
              />
            </div>
          </div>
          <ul className="hidden lg:flex gap-8">
            {[
              { name: "Home", key: "home" },
              { name: "Shop", key: "shop" },
              { name: "Categories", key: "categories" },
              { name: "About Us", key: "about" },
              { name: "Contact", key: "contact" },
            ].map((item) => (
              <li key={item.key}>
                <a
                  onClick={() => navigate(item.key)}
                  className={`font-medium pb-2 cursor-pointer relative transition-all duration-300
                    ${
                      currentPage === item.key
                        ? "text-[#D4AF37] border-b-2 border-[#D4AF37]"
                        : "text-gray-400 hover:text-[#D4AF37]"
                    }
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                    after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300
                  `}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <svg
              className="w-6 h-6 text-gray-500 hover:text-[#D4AF37] cursor-pointer transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>

            <div
              className="relative cursor-pointer"
              onClick={() => navigate("cart")}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-[#D4AF37] transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.838-5.513A1.875 1.875 0 0018.618 6H6.118a1.875 1.875 0 00-1.838 2.335L6.342 14.25zM7.5 14.25h11.218"
                />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-blue-600 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs font-semibold">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const Hero = ({ setCurrentPage }: HeroProps) => (
  <section
    className="relative h-[60vh] bg-cover bg-center text-white flex flex-col justify-center items-center text-center md:text-left"
    style={{
      backgroundImage: `url('banner.png')`, // 👉 তোমার image path এখানে দাও
    }}
  >
    {/* Overlay */}
    {/* <div className="absolute inset-0 bg-black/50"></div> */}

    {/* Content */}
    <div className="relative z-10 w-full h-full flex flex-col justify-center md:justify-between p-6 md:p-12">
      {/* Center Text */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left flex-grow">
        <h3 className="text-lg max-w-2xl mx-auto md:mx-0 mb-4"> NEW SEASON</h3>
        <h1 className="text-4xl text-[#D4AF37] md:text-5xl font-bold mb-4">
          FASHION SALE
        </h1>
        <p className="text-lg max-w-2xl mx-auto md:mx-0 mb-8">
          Browse our new collection and find your next favorite outfit.
        </p>
      </div>

      {/* Bottom Left Button */}
      <div className="flex justify-center md:justify-start">
        <button
          className="bg-[#0B1A3A] text-[#D4AF37] py-3 px-8 rounded-md font-medium cursor-pointer transition-colors hover:text-white"
          onClick={() => setCurrentPage("shop")}
        >
          Shop Now
        </button>
      </div>
    </div>
  </section>
);

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
  handleBuyNow: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
  handleBuyNow,
}) => {
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="group border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col">
      {/* Image Container */}
      <div
        className="relative overflow-hidden cursor-pointer"
        onClick={() => setShowButtons(!showButtons)} // Mobile tap toggle
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Buttons */}
        <div
          className={`
            absolute left-1/2 -translate-x-1/2 flex gap-2
            transition-all duration-500
            md:bottom-[-100px] md:opacity-0 md:group-hover:bottom-5 md:group-hover:opacity-100
            ${showButtons ? "bottom-5 opacity-100" : ""}
          `}
          style={{ transitionProperty: "bottom, opacity" }}
        >
          {/* Add to Cart Button */}
          <button
            className="bg-[#0B1A3A] text-[#D4AF37] whitespace-nowrap py-2 px-4 rounded-md font-medium text-sm transition-colors hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Add to Cart
          </button>

          {/* Buy Now Button */}
          <button
            className="bg-green-800 text-white whitespace-nowrap py-2 px-4 rounded-md font-medium text-sm transition-colors hover:text-[#D4AF37]"
            onClick={(e) => {
              e.stopPropagation();
              handleBuyNow(product);
            }}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 text-center mt-auto">
        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-[#D4AF37]">
          {product.price.toFixed(2)} ৳
        </p>
      </div>
    </div>
  );
};

interface FeaturedProductsProps {
  addToCart: (product: Product) => void;
  handleBuyNow: (product: Product) => void;
}

const FeaturedProducts = ({
  addToCart,
  handleBuyNow,
}: FeaturedProductsProps) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts
          .slice()
          .reverse()
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              handleBuyNow={handleBuyNow}
            />
          ))}
      </div>
    </div>
  </section>
);

interface CategoriesPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedCategory: (category: Category) => void;
}

const CategoriesPage = ({
  setCurrentPage,
  setSelectedCategory,
}: CategoriesPageProps) => {
  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage("shop");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              aria-label={`View ${category} category`}
              className="group relative h-64 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={categoryData[category]}
                alt={category}
                width={2670}
                height={1780}
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-0 transition-colors group-hover:bg-black/60"></div>
              <span className="relative z-10 text-2xl md:text-3xl font-semibold text-white">
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ShopPageProps {
  selectedCategory: Category | null;
  addToCart: (product: Product) => void;
  handleBuyNow: (product: Product) => void;
}

const ShopPage = ({
  selectedCategory,
  addToCart,
  handleBuyNow,
}: ShopPageProps) => {
  const productsToShow = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
          {selectedCategory || "All Products"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsToShow.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              handleBuyNow={handleBuyNow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="relative mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Full Name"
                  className="peer w-full p-3.5 border border-gray-300 rounded-md bg-white placeholder-transparent focus:outline-none focus:border-[#0B1A3A] focus:ring-1 focus:ring-[#0B1A3A] hover:border-[#D4AF37] transition-colors duration-300"
                />
                <label
                  htmlFor="name"
                  className="absolute -top-2.5 left-3 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#0B1A3A]"
                >
                  Full Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="peer w-full p-3.5 border border-gray-300 rounded-md bg-white placeholder-transparent focus:outline-none focus:border-[#0B1A3A] focus:ring-1 focus:ring-[#0B1A3A] hover:border-[#D4AF37] transition-colors duration-300"
                />
                <label
                  htmlFor="email"
                  className="absolute -top-2.5 left-3 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#0B1A3A]"
                >
                  Email Address
                </label>
              </div>

              {/* Subject Field */}
              <div className="relative mb-6">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="peer w-full p-3.5 border border-gray-300 rounded-md bg-white placeholder-transparent focus:outline-none focus:border-[#0B1A3A] focus:ring-1 focus:ring-[#0B1A3A] hover:border-[#D4AF37] transition-colors duration-300"
                />
                <label
                  htmlFor="subject"
                  className="absolute -top-2.5 left-3 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#0B1A3A]"
                >
                  Subject
                </label>
              </div>

              {/* Message Field */}
              <div className="relative mb-6">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Message"
                  className="peer w-full p-3.5 border border-gray-300 rounded-md bg-white placeholder-transparent focus:outline-none focus:border-[#0B1A3A] focus:ring-1 focus:ring-[#0B1A3A] hover:border-[#D4AF37] transition-colors duration-300"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute -top-2.5 left-3 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#0B1A3A]"
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#0B1A3A] text-white rounded-md text-lg font-medium cursor-pointer transition-colors duration-300 hover:text-[#D4AF37]"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>
            <p className="mb-6">
              Have a question or want to learn more? Feel free to reach out to
              us through any of the channels below.
            </p>
            <div className="flex items-start gap-4 mb-6">
              <svg
                className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <div>
                <strong>Address:</strong> Sector 15, Uttara, Dhaka 1230
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <svg
                className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:liveflashback90@gmail.com"
                  className="hover:text-blue-600"
                >
                  liveflashback90@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
                />
              </svg>
              <div>
                <strong>Phone:</strong>{" "}
                <a href="tel:01725663176" className="hover:text-blue-600">
                  01725663176
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShippingPolicy = () => (
  <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 mt-10">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-300">
      ডেলিভারি ও শিপিং পলিসি
    </h3>
    <p className="mb-6 text-black">
      আমরা আমাদের প্রোডাক্টগুলো <strong>Stedfast Courier Service</strong> এর
      মাধ্যমে ডেলিভারি করে থাকি, যাতে আপনি নিরাপদ ও দ্রুত সার্ভিস পান।
    </p>
    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
      <div className="flex-1">
        <h4 className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-3">
          <svg
            className="w-6 h-6 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-9m17.25 9v-9m-17.25-9h9.563c.621 0 1.125.504 1.125 1.125v4.5m-10.688 0H18.375a1.125 1.125 0 011.125 1.125v.625"
            />
          </svg>
          ডেলিভারি চার্জ
        </h4>
        <ul className="list-none space-y-1 text-black">
          <li>
            ঢাকার মধ্যে: <strong>60 টাকা</strong>
          </li>
          <li>
            ঢাকার বাইরে: <strong>120 টাকা</strong>
          </li>
        </ul>
      </div>
      <div className="flex-1 text-black">
        <h4 className="flex items-center gap-3 text-lg font-semibold text-gray-800 mb-3">
          <svg
            className="w-6 h-6 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          ডেলিভারি সময়
        </h4>
        <ul className="list-none space-y-1">
          <li>ঢাকার মধ্যে: অর্ডার করার পর ১-২ কর্মদিবসের মধ্যে</li>
          <li>ঢাকার বাইরে: অর্ডার করার পর ২-৪ কর্মদিবসের মধ্যে</li>
        </ul>
      </div>
    </div>
  </div>
);

interface CartPageProps {
  cart: CartItem[];
  updateCartQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  handleCheckout: () => void;
}

const CartPage = ({
  cart,
  updateCartQuantity,
  removeFromCart,
  handleCheckout,
}: CartPageProps) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = 120.0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <section className="py-16 h-1/2 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold mb-4 text-gray-800">
            Your Cart is Empty
          </h2>
          <p className="text-lg">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
          Your Shopping Cart
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 items-start">
          {/* Cart Items */}
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-lg border border-gray-200"
                key={item.product.id}
              >
                {/* Product Image */}
                <Image
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-md flex-shrink-0"
                />

                {/* Name + Quantity + Remove */}
                <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  {/* Product Name */}
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-gray-800 block truncate">
                      {item.product.name}
                    </span>
                  </div>

                  {/* Mobile Quantity + Remove Row */}
                  <div className="flex justify-between items-center w-full sm:w-auto mt-2 sm:mt-0">
                    {/* Quantity Left */}
                    <div className="flex items-center gap-2 text-black">
                      <button
                        onClick={() =>
                          updateCartQuantity(item.product.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="w-8 h-8 border border-gray-300 bg-gray-100 rounded-md disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateCartQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-8 h-8 border border-gray-300 bg-gray-100 rounded-md"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center gap-5 ml-4">
                      <label
                        htmlFor={`size-${item.product.id}`}
                        className="text-sm text-gray-600"
                      >
                        Size
                      </label>
                      <select
                        required
                        id={`size-${item.product.id}`}
                        defaultValue={
                          typeof window !== "undefined"
                            ? localStorage.getItem(`size-${item.product.id}`) ??
                              "M"
                            : "M"
                        }
                        onChange={(e) =>
                          typeof window !== "undefined" &&
                          localStorage.setItem(
                            `size-${item.product.id}`,
                            e.target.value
                          )
                        }
                        className="border border-gray-300 rounded-md px-2 py-1 bg-white text-black"
                        aria-label={`Select size for ${item.product.name}`}
                      >
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </div>

                    {/* Remove Button Right */}
                    <button
                      className="text-gray-500 hover:text-red-500 text-2xl"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      &times;
                    </button>
                  </div>

                  {/* Desktop Price */}
                  <div className="font-semibold text-lg text-gray-800 text-right sm:w-24 hidden sm:block">
                    ৳{(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>

                {/* Mobile Price Below */}
                <div className="text-gray-800 font-semibold text-lg block sm:hidden mt-2">
                  ৳{(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 sticky top-20">
            <h3 className="text-2xl text-black font-semibold mb-6 pb-4 border-b">
              Order Summary
            </h3>
            <div className="space-y-4 text-black">
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span>৳{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Shipping</span>
                <span>৳{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-800 pt-4 border-t mt-4">
                <span>Total</span>
                <span>৳{total.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="w-full mt-6 py-3 bg-[#0B1A3A] text-white rounded-md text-lg font-medium cursor-pointer transition-colors hover:text-[#D4AF37]"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        <ShippingPolicy />
      </div>
    </section>
  );
};

interface CheckoutPageProps {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  setCurrentPage: (page: string) => void;
}
const CheckoutPage = ({ cart, setCart, setCurrentPage }: CheckoutPageProps) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    size: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = 120.0;
  const total = subtotal + shipping;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailTo = "liveflashback90@gmail.com";
    const subject = `New Order from ${formData.name}`;

    let body = `
            A new order has been placed on liveflashback.\n
            Customer Details:
            - Name: ${formData.name}
            - Address: ${formData.address}
            - Phone: ${formData.phone}\n
            Order Summary:
            -------------------\n
        `;

    cart.forEach((item) => {
      body += `${item.product.name} (x${item.quantity}) - ৳${(
        item.product.price * item.quantity
      ).toFixed(2)}\n`;
    });

    body += `
            -------------------
            Size: ${formData.size}
            Subtotal: ৳${subtotal.toFixed(2)}
            Shipping: ৳${shipping.toFixed(2)}
            Total: ৳${total.toFixed(2)}
        `;

    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Try to open mail client via a temporary anchor (more reliable in desktop browsers)
    try {
      const a = document.createElement("a");
      a.href = mailtoLink;
      a.target = "_blank";
      a.rel = "noopener";
      // Append to DOM and click to trigger mail client
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      // Fallback: copy mailto link to clipboard and inform user
      try {
        await navigator.clipboard.writeText(mailtoLink);
        alert(
          "Could not open your mail client automatically. A mail link has been copied to your clipboard — paste it into your mail app to send the order."
        );
      } catch {
        alert(
          "Could not open mail client and could not copy link to clipboard. Please contact support or try from another device."
        );
      }
    }

    setCart([]);
    setCurrentPage("orderConfirmation");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
          Checkout
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md border">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Shipping Information
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <select
                  required
                  id={`size-${cart[0]?.product.id}`}
                  defaultValue={
                    typeof window !== "undefined"
                      ? localStorage.getItem(`size-${cart[0]?.product.id}`) ??
                        "M"
                      : "M"
                  }
                  onChange={(e) =>
                    typeof window !== "undefined" &&
                    localStorage.setItem(
                      `size-${cart[0]?.product.id}`,
                      e.target.value
                    )
                  }
                  className="border w-full h-12 border-gray-300 rounded-md px-2 py-1 bg-white text-black"
                >
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <label
                  htmlFor="name"
                  className="absolute -top-2.5 left-3 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#0B1A3A]"
                >
                  Size
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Full Name"
                  className="peer w-full p-3.5 border border-gray-300 rounded-md bg-white placeholder-transparent focus:outline-none focus:border-[#0B1A3A] focus:ring-1 focus:ring-[#0B1A3A]"
                />
                <label
                  htmlFor="name"
                  className="absolute -top-2.5 left-3 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#0B1A3A]"
                >
                  Full Name
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Address / Location"
                  className="peer w-full p-3.5 border border-gray-300 rounded-md bg-white placeholder-transparent focus:outline-none focus:border-[#0B1A3A] focus:ring-1 focus:ring-[#0B1A3A]"
                />
                <label
                  htmlFor="address"
                  className="absolute -top-2.5 left-3 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#0B1A3A]"
                >
                  Address / Location
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Phone Number"
                  className="peer w-full p-3.5 border border-gray-300 rounded-md bg-white placeholder-transparent focus:outline-none focus:border-[#0B1A3A] focus:ring-1 focus:ring-[#0B1A3A]"
                />
                <label
                  htmlFor="phone"
                  className="absolute -top-2.5 left-3 text-sm text-gray-600 bg-white px-1 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#0B1A3A]"
                >
                  Phone Number
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#0B1A3A] text-white rounded-md text-lg font-medium cursor-pointer transition-colors hover:text-[#D4AF37]"
              >
                Place Order
              </button>
            </form>
          </div>
          <div className="bg-white text-black p-8 rounded-lg shadow-md border sticky top-32">
            <h3 className="text-2xl font-semibold mb-6 pb-4 border-b">
              Your Order
            </h3>
            <div className="space-y-4 mb-4">
              {cart.map((item) => (
                <div className="flex justify-between" key={item.product.id}>
                  <span>
                    {item.product.name} x {item.quantity}
                  </span>
                  <span className="font-medium">
                    ৳{(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-4 border-t pt-4">
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span>৳{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Shipping</span>
                <span>৳{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-800 pt-4 border-t mt-4">
                <span>Total</span>
                <span>৳{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        <ShippingPolicy />
      </div>
    </section>
  );
};

interface OrderConfirmationPageProps {
  setCurrentPage: (page: string) => void;
}

const OrderConfirmationPage = ({
  setCurrentPage,
}: OrderConfirmationPageProps) => (
  <section className="py-16 bg-white flex items-center justify-center">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="bg-white p-12 rounded-lg text-center max-w-2xl mx-auto shadow-lg border">
        <svg
          className="w-20 h-20 text-[#0B1A3A] mx-auto mb-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Thank You For Your Order!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your order has been placed successfully. We&apos;ve sent a
          confirmation to your email address.
        </p>
        <button
          className="bg-[#0B1A3A] text-white py-3 px-8 rounded-md font-medium cursor-pointer transition-colors hover:text-[#D4AF37]"
          onClick={() => setCurrentPage("shop")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  </section>
);

const AboutUsPage = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
        About liveflashback
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <Image
          src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2670&auto=format&fit=crop"
          alt="About liveflashback"
          width={2670}
          height={1780}
          className="w-full h-[450px] object-cover rounded-lg"
        />
        <div className="text-gray-600 leading-relaxed">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Story
          </h3>
          <p className="mb-4">
            Welcome to liveflashback, your number one source for all things
            fashion. We&apos;re dedicated to giving you the very best of
            apparel, footwear, and accessories, with a focus on quality,
            customer service, and uniqueness.
          </p>
          <p className="mb-4">
            Founded in 2024, liveflashback has come a long way from its
            beginnings. When we first started out, our passion for eco-friendly
            and stylish clothing drove us to do intense research, and gave us
            the impetus to turn hard work and inspiration into to a booming
            online store. We now serve customers all over the country, and are
            thrilled to be a part of the quirky, eco-friendly, fair trade wing
            of the fashion industry.
          </p>
          <p>
            We hope you enjoy our products as much as we enjoy offering them to
            you. If you have any questions or comments, please don&apos;t
            hesitate to contact us.
          </p>
        </div>
      </div>
      <ShippingPolicy />
    </div>
  </section>
);

interface HomePageProps extends HeroProps {
  addToCart: (product: Product) => void;
  handleBuyNow: (product: Product) => void;
}

const HomePage = ({
  setCurrentPage,
  addToCart,
  handleBuyNow,
}: HomePageProps) => (
  <>
    <Hero setCurrentPage={setCurrentPage} />
    <FeaturedProducts addToCart={addToCart} handleBuyNow={handleBuyNow} />
  </>
);

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer = ({ setCurrentPage }: FooterProps) => (
  <footer className="bg-gray-800 text-gray-400 pt-16 pb-8">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#D4AF37]">
            About liveflashback
          </h3>
          <p className="max-w-sm">
            Your one-stop shop for the latest trends in fashion. We are
            committed to providing high-quality products and excellent customer
            service.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#D4AF37]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                onClick={() => setCurrentPage("about")}
                className="hover:text-white cursor-pointer"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={() => setCurrentPage("contact")}
                className="hover:text-white cursor-pointer"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                onClick={() => setCurrentPage("home")}
                className="hover:text-white cursor-pointer"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                onClick={() => setCurrentPage("about")}
                className="hover:text-white cursor-pointer"
              >
                Shipping & Returns
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-[#D4AF37]">
            Contact & Social
          </h3>
          <div className="flex items-center gap-3 mb-4">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
              />
            </svg>
            <a href="tel:01725663176" className="hover:text-white">
              01725663176
            </a>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <a
              href="mailto:liveflashback90@gmail.com"
              className="hover:text-white"
            >
              liveflashback90@gmail.com
            </a>
          </div>
          <div className="flex gap-6 items-center">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/live.flashback_90s?igsh=MW8zZXhtdTlxbnJtZQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* TikTok (Outline Version) */}
            <a
              href="https://www.tiktok.com/@liveflashback?_t=ZS-8ztFESkum2q&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M12 3v9.28a3.72 3.72 0 1 1-3-3.64" />
                <path d="M12 3c.83 1.17 2.29 2 4 2" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61571712914378"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v3h3v8h3v-8h3l1-3h-4V6a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center pt-8 text-sm">
        <p>© 2025 liveflashback. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

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
