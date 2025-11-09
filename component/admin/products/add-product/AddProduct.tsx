import React from "react";
import ProductForm from "./components/ProductForm";
import { ProductProvider } from "./contexts/ProductContext";

const AddProduct: React.FC = () => {
  return (
    <ProductProvider>
      <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-800">
        <main className="container mx-auto px-4 py-8 md:py-12">
          <ProductForm />
        </main>
      </div>
    </ProductProvider>
  );
};

export default AddProduct;
