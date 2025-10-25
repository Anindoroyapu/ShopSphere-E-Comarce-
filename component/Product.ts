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
import lm112 from "@/public/lm112.jpg";
import lm113 from "@/public/lm113.jpg";
import lm114 from "@/public/lm114.jpg";
import lm115 from "@/public/lm115.jpg";
import lm116 from "@/public/lm116.jpg";
import lm119 from "@/public/lm119.jpg";
import lm120 from "@/public/lm120.jpg";
import lm121 from "@/public/lm121.jpg";
import lm122 from "@/public/bhbh.jpeg";
import lm123 from "@/public/bhbhbh.jpeg";
import lm124 from "@/public/bhbhbhbh.jpeg";

import { StaticImageData } from "next/image";

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Navy blue solid shirt",
    price: 690.0,
    imageUrl: lm101,
    category: "Apparel",
  },
  {
    id: 2,
    name: "Red & White Vertical Striped Shirt",
    price: 690.0,
    imageUrl: lm110,
    category: "Apparel",
  },
  {
    id: 3,
    name: "Green solid shirt ",
    price: 690.0,
    imageUrl: lm112,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Sky blue and white stripe shirt",
    price: 690.0,
    imageUrl: lm113,
    category: "Apparel",
  },
  {
    id: 5,
    name: "Black and blue stripe shirt",
    price: 690.0,
    imageUrl: lm114,
    category: "Accessories",
  },
  {
    id: 6,
    name: "Black and white stripe shirt",
    price: 690.0,
    imageUrl: lm115,
    category: "Accessories",
  },
  {
    id: 7,
    name: "White polo t-shirt",
    price: 690.0,
    imageUrl: lm116,
    category: "Footwear",
  },
  {
    id: 8,
    name: "Maroon stripe shirt",
    price: 690.0,
    imageUrl: lm119,
    category: "Accessories",
  },
  {
    id: 9,
    name: "White solid shirt",
    price: 690.0,
    imageUrl: lm121,
    category: "Accessories",
  },
  {
    id: 10,
    name: "PU Leather jacket ",
    price: 690.0,
    imageUrl: lm122,
    category: "Accessories",
  },{
    id: 11,
    name: "Solid white shirt ",
    price: 690.0,
    imageUrl: lm123,
    category: "Accessories",
  },{
    id: 12,
    name: "Solid Black shirt ",
    price: 690.0,
    imageUrl: lm124,
    category: "Accessories",
  },

];
