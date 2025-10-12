import { useState } from "react";
import { CheckoutPageProps } from "../type";
import ShippingPolicy from "../shipping-policy/ShippingPolicy";

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
            {cart.map((item) => (
              <div
                className="flex justify-between text-black text-2xl font-medium mb-4"
                key={item.product.id}
              >
                <span>
                  {item.product.name} x {item.quantity}
                </span>
                <span className="font-medium">
                  ৳{(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <form onSubmit={handleSubmit}>
              <div className="relative mb-6">
                <select
                  required
                  id={`size-${cart[0]?.product.id}`}
                  name="size"
                  value={
                    formData.size ||
                    (typeof window !== "undefined"
                      ? localStorage.getItem(`size-${cart[0]?.product.id}`) ??
                        "M"
                      : "M")
                  }
                  onChange={(e) => {
                    const { value } = e.target;
                    setFormData((prev) => ({ ...prev, size: value }));

                    if (typeof window !== "undefined") {
                      localStorage.setItem(
                        `size-${cart[0]?.product.id}`,
                        value
                      );
                    }
                  }}
                  className="border w-full h-12 border-gray-300 rounded-md px-2 py-1 bg-white text-black"
                >
                  <>
                    <option value="" disabled>
                      Select size
                    </option>
                    {["M", "L", "XL"].map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </>
                </select>
                <label
                  htmlFor={`size-${cart[0]?.product.id}`}
                  className="absolute -top-2.5 left-3 text-sm text-gray-600 bg-white px-1"
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

export default CheckoutPage;
