import Image from "next/image";
import ShippingPolicy from "../shipping-policy/ShippingPolicy";

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
export default AboutUsPage;
