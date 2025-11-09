"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
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
    price: "",
    sku: `SKU-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    stockQuantity: "",
    status: ProductStatus.Published,
    image: null,
  });

  const { setMessage, setTemplateLoading } = useTemplate();
  const { post } = useApi();

  const handleSubmit = async () => {
    setTemplateLoading(true);
    try {
      const { message } = await post<{ token: string }>("AddProduct", {
        sl: product.sku,
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        stockQuantity: product.stockQuantity,
        status: product.status,
        image: product.image,
      });
      setMessage("success", message);
      setTemplateLoading(false);
    } catch (ex) {
      setMessage("error", handleAxiosError(ex));
    } finally {
      setTemplateLoading(false);
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
