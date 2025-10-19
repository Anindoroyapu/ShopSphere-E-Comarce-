import "../globals.css";
import AuthCheckProvider from "@/component/admin/context/AuthCheckProvider";

export const metadata = {
  title: "ShopSphere",
  description: "Fashion e-commerce built with Next.js",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AuthCheckProvider>{children}</AuthCheckProvider>
    </main>
  );
}
