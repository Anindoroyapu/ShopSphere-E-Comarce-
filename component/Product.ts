interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string | StaticImageData;
  category: Category;
}
type Category = "Apparel" | "Footwear" | "Accessories";

import lm101 from "@/public/lm101.jpg";
import lm110 from "@/public/lm110.jpg";
import lm111 from "@/public/lm111.jpg";
import lm112 from "@/public/lm112.jpg";
import lm113 from "@/public/lm113.jpg";
import lm114 from "@/public/lm114.jpg";
import lm115 from "@/public/lm115.jpg";
import lm116 from "@/public/lm116.jpg";
import lm117 from "@/public/lm117.jpg";
import lm118 from "@/public/lm118.jpg";
import lm119 from "@/public/lm119.jpg";
import lm120 from "@/public/lm120.jpg";
import { StaticImageData } from "next/image";

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 690.0,
    imageUrl: lm101,
    category: "Apparel",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 690.0,
    imageUrl: lm110,
    category: "Apparel",
  },
  {
    id: 3,
    name: "Leather Boots",
    price: 690.0,
    imageUrl: lm111,
    category: "Footwear",
  },
  {
    id: 4,
    name: "Stylish Sunglasses",
    price: 690.0,
    imageUrl: lm112,
    category: "Accessories",
  },
  {
    id: 5,
    name: "Cozy Knit Sweater",
    price: 690.0,
    imageUrl: lm113,
    category: "Apparel",
  },
  {
    id: 6,
    name: "Black Leather Bag",
    price: 690.0,
    imageUrl: lm114,
    category: "Accessories",
  },
  {
    id: 7,
    name: "Modern Wristwatch",
    price: 690.0,
    imageUrl: lm115,
    category: "Accessories",
  },
  {
    id: 8,
    name: "Casual Sneakers",
    price: 690.0,
    imageUrl: lm116,
    category: "Footwear",
  },
  {
    id: 9,
    name: "Cozy Knit Sweater",
    price: 690.0,
    imageUrl: lm117,
    category: "Apparel",
  },
  {
    id: 10,
    name: "Black Leather Bag",
    price: 690.0,
    imageUrl: lm118,
    category: "Accessories",
  },
  {
    id: 11,
    name: "Modern Wristwatch",
    price: 690.0,
    imageUrl: lm119,
    category: "Accessories",
  },
  {
    id: 12,
    name: "Casual Sneakers",
    price: 690.0,
    imageUrl: lm120,
    category: "Footwear",
  },
];
