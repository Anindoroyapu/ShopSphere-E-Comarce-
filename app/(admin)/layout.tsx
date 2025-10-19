"use client";

import "../globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "ShopSphere",
  description: "Fashion e-commerce built with Next.js",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔒 যদি token না থাকে → Login পেজে পাঠাও
    if (!token) {
      router.replace("/login");
      return;
    }

    const verifyToken = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/check-token", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!res.ok) throw new Error("Invalid token");

        const data = await res.json();

        if (data.status === "valid") {
          setLoading(false);
        } else {
          localStorage.removeItem("token");
          router.replace("/login");
        }
      } catch (error) {
        console.error("Token check failed:", error);
        localStorage.removeItem("token");
        router.replace("/login");
      }
    };

    verifyToken();
  }, [router]);

  // ⏳ Loading অবস্থায় simple message দেখাও
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Checking authentication...
      </div>
    );
  }

  // ✅ Token valid হলে children render করো
  return <main>{children}</main>;
}
