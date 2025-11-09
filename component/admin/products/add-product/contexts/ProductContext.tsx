"use client";
import React, { createContext, useContext, useState,  ReactNode } from 'react';
import { Product, ProductStatus } from '../types';


interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error';
}

interface ProductContextType {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
  toasts: ToastMessage[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  addToast: (message: string, type?: 'success' | 'error') => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [product, setProduct] = useState<Product>({
    name: '',
    description: '',
    category: '',
    price: '',
    sku: `SKU-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    stockQuantity: '',
    status: ProductStatus.Published,
    image: null,
  });
  
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  
  const addToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Product Submitted:', product);
    addToast('Product added successfully!', 'success');
    // Here you would typically send the data to a server
    // Reset form for demo purposes
    setProduct({
        name: '',
        description: '',
        category: '',
        price: '',
        sku: `SKU-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        stockQuantity: '',
        status: ProductStatus.Published,
        image: null,
    });
  };

  return (
    <ProductContext.Provider value={{ product, setProduct,  toasts, handleSubmit, addToast }}>
      {children}
    </ProductContext.Provider>
  );
};
 
export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
