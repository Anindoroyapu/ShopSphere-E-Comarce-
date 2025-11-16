"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,

} from "react";
import { Product, ProductStatus } from "../types";
import { useTemplate } from "@/component/liveflashback/contexts/template/TemplateProvider";
import useApi from "@/component/liveflashback/utils/useApi";
import { handleAxiosError } from "@/component/liveflashback/utils/handleAxiosError";


interface ProductContextType {
  product: Product;

  setProduct: React.Dispatch<React.SetStateAction<Product>>;

  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useList = () => {
  const context = useContext(ProductContext);
  return context as ProductContextType;
};

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    category: "",
    price: 0,
    sku: `SKU-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    stockQuantity: 0,
    status: ProductStatus.Published,
    image: new File([], "image.jpg"),
  });

  const { setMessage } = useTemplate();
  const { post } = useApi();

  const handleSubmit = async () => {
    try {
      const { message } = await post<{ message: string }>("AddProduct", {
        id: 0,
        brandSl: "0",
        title: product.name,
        subTitle: product.name,
        unit: "pcs",
        addProduct: "true",
        sku: product.sku,
        // pricePurchase: product.price,
        // priceSale: product.price,
        priceSaleOffer: product.price,
        productDescription: product.description,
        categoryTitle: product.category,
        price: product.price,
        is_in_stock: product.stockQuantity,
        deliveryAmount: "0",
        timeCreated: new Date().toISOString(),
        timeUpdated: new Date().toISOString(),
        status: product.status,
        defaultImage: product.image || "image.jpg",
      });
      setMessage("success", message);

    } catch (ex) {
      setMessage("error", handleAxiosError(ex));
    } finally {

    }
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,

        handleSubmit,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
