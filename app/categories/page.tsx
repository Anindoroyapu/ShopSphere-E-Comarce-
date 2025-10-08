// "use client";
// import { useState } from "react";
// import ProductGrid from "@/components/ProductGrid";
// import { products } from "@/data/products";

// export default function CategoriesPage() {
//   const categories = ["All", ...new Set(products.map((p) => p.category))];
//   const [active, setActive] = useState("All");

//   const filtered =
//     active === "All" ? products : products.filter((p) => p.category === active);

//   return (
//     <div className="container page-container">
//       <h2 className="section-title">Shop by Category</h2>
//       <div className="category-filters">
//         {categories.map((c) => (
//           <button
//             key={c}
//             className={`category-btn ${active === c ? "active" : ""}`}
//             onClick={() => setActive(c)}
//           >
//             {c}
//           </button>
//         ))}
//       </div>
//       <ProductGrid items={filtered} title={active} />
//     </div>
//   );
// }
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
