import { CartProvider } from "@/component/context/CartContext";
import "./globals.css";

export const metadata = {
  title: "ShopSphere",
  description: "Fashion e-commerce built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
