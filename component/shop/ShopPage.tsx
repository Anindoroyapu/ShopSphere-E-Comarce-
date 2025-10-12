import { allProducts } from "../Product";
import { ShopPageProps } from "../type";

const ShopPage = ({
  selectedCategory,
  addToCart,
  handleBuyNow,
}: ShopPageProps) => {
  const productsToShow = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
          {selectedCategory || "All Products"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsToShow.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              handleBuyNow={handleBuyNow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ShopPage;
