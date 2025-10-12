import { HeroProps } from "../type";

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
export default Hero;
