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
                <strong>Phone:</strong>
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
export default ContactPage;
