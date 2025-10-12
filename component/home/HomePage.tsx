import { HomePageProps } from "../type";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./HeroSection";

const HomePage = ({
  setCurrentPage,
  addToCart,
  handleBuyNow,
}: HomePageProps) => (
  <>
    <Hero setCurrentPage={setCurrentPage} />
    <FeaturedProducts addToCart={addToCart} handleBuyNow={handleBuyNow} />
  </>
);
export default HomePage;
