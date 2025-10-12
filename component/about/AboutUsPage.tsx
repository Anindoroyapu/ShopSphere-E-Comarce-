import ShippingPolicy from "../shipping-policy/ShippingPolicy";
import { AboutBodySection } from "./AboutBodySection";

const AboutUsPage = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
        About liveflashback
      </h2>

      <AboutBodySection />
      <ShippingPolicy />
    </div>
  </section>
);
export default AboutUsPage;
