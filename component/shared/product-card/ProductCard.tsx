import { ProductCardProps } from "@/component/type";
import Image from "next/image";
import { useState } from "react";

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
export default ProductCard;
