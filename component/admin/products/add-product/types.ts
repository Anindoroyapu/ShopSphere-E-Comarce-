
export enum ProductStatus {
  Published = 'PUBLISHED',
  Draft = 'DRAFT',
}

export interface Product {
  name: string;
  description: string;
  category: string;
  price: number | '';
  sku: string;
  stockQuantity: number | '';
  status: ProductStatus;
  image: File | null;
}
