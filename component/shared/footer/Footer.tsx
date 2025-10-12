import { FooterProps } from "@/component/type";

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

export default Footer;
