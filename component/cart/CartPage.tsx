import Image from "next/image";
import { CartPageProps } from "../type";

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
                  width={150}
                  height={150}
                  sizes="100vw"
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
export default CartPage;
