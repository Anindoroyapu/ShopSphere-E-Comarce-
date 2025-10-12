import type { HeaderProps } from "@/component/type";
import Image from "next/image";
import logo from "@/public/logo.png";

const MENU = [
  { name: "About Us", key: "about" },
  { name: "Categories", key: "categories" },
  { name: "Contact", key: "contact" },
  { name: "Home", key: "home" },
  { name: "Shop", key: "shop" },
];

const Header = ({
  cartCount,
  currentPage,
  setCurrentPage,
  setSelectedCategory,
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
            {MENU.map((item) => (
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

export default Header;
