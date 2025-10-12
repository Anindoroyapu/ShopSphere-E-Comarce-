import Image from "next/image";
import { CategoriesPageProps, Category } from "../type";

const categoryData = {
  Apparel:
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop",
  Footwear:
    "https://images.unsplash.com/photo-1557870189-2765a0834a78?q=80&w=2670&auto=format&fit=crop",
  Accessories:
    "https://images.unsplash.com/photo-1576053139997-f8563a483375?q=80&w=2670&auto=format&fit=crop",
};

const categories: Category[] = ["Apparel", "Footwear", "Accessories"];

const CategoriesPage = ({
  setCurrentPage,
  setSelectedCategory,
}: CategoriesPageProps) => {
  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setCurrentPage("shop");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              aria-label={`View ${category} category`}
              className="group relative h-64 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={categoryData[category]}
                alt={category}
                width={2670}
                height={1780}
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-0 transition-colors group-hover:bg-black/60"></div>
              <span className="relative z-10 text-2xl md:text-3xl font-semibold text-white">
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CategoriesPage;
