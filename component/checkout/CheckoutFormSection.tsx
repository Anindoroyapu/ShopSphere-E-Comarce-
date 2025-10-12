import React, { FC } from "react";

export const CheckoutFormSection: FC<{
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: { name: string; address: string; phone: string; size: string };
  handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      address: string;
      phone: string;
      size: string;
    }>
  >;
  cart: { product: { id: string | number } }[];
}> = ({ handleSubmit, formData, handleInputChange, setFormData, cart }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mb-6">
        <select
          required
          id={`size-${cart[0]?.product.id}`}
          name="size"
          value={
            formData.size ||
            (typeof window !== "undefined"
              ? localStorage.getItem(`size-${cart[0]?.product.id}`) ?? "M"
              : "M")
          }
          onChange={(e) => {
            const { value } = e.target;
            setFormData((prev) => ({ ...prev, size: value }));

            if (typeof window !== "undefined") {
              localStorage.setItem(`size-${cart[0]?.product.id}`, value);
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
  );
};
