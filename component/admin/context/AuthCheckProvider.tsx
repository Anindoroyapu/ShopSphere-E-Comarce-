"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AuthCheckProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default AuthCheckProvider;
