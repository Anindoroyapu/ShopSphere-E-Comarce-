import React, { FC } from "react";

export const ContactFormSection: FC<{
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ handleSubmit }) => {
  return (
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
  );
};
