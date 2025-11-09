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
import { time } from "console";

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
    name: "asad",
    description: "asadsss",
    category: "asad",
    price: 1212,
    sku: `SKU-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    stockQuantity: 12,
    status: ProductStatus.Published,
    image: null,
  });

  const { setMessage, setTemplateLoading } = useTemplate();
  const { post } = useApi();

  const handleSubmit = async () => {
    // setTemplateLoading(true);
    try {
      const { message } = await post<{ token: string }>("AddProduct", {
        sl: 0,
        brandSl: "0",
        title: product.name,
        subTitle: product.name,
        unit: "pcs",
        sku: product.sku,
        pricePurchase: product.price,
        priceSale: product.price,
        priceSaleOffer: product.price,
        productDescription: product.description,
        categoryTitle: product.category,
        price: product.price,
        isInStoke: product.stockQuantity,
        deliveryAmount: "0",
        timeCreated: new Date().toISOString(),
        timeUpdated: new Date().toISOString(),
        status: product.status,
        defaultImage: product.image,
      });
      setMessage("success", message);
      // setTemplateLoading(false);
    } catch (ex) {
      setMessage("error", handleAxiosError(ex));
    } finally {
      // setTemplateLoading(false);
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
