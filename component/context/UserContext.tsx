"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

// ✅ Step 1: Define proper User type
interface User {
  id: number;
  name: string;
  email: string;
  role: number; // 0=customer,1=admin,2=vendor
  avatar?: string; // optional avatar
}

// ✅ Step 2: Define context interface
interface UserContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// ✅ Step 3: Create Context
export const UserContext = createContext<UserContextType>({
  user: null,
  token: null,
  loading: false,
  login: async () => {},
  logout: () => {},
});

// ✅ Step 4: Create Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ Load token from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);

      // Fetch user data from backend
      const fetchUser = async () => {
        try {
          const res = await fetch("http://admin.ashaa.xyz/api/Contact", {
            headers: {
              Authorization: `Bearer ${savedToken}`,
              Accept: "application/json",
            },
          });
          if (!res.ok) throw new Error("Failed to fetch user");
          const data = await res.json();

          const loggedInUser: User = {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            role: data.user.role,
            avatar: data.user.avatar || "",
          };
          setUser(loggedInUser);
        } catch (error) {
          console.error("Error fetching user on mount:", error);
          localStorage.removeItem("token");
          setToken(null);
          setUser(null);
        }
      };

      fetchUser();
    }
  }, []);

  // ✅ Handle login
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        localStorage.setItem("token", data.token);
        setToken(data.token);

        // ✅ Map backend user response to User type
        const loggedInUser: User = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.role,
          avatar: data.user.avatar || "", // fallback empty string
        };
        setUser(loggedInUser);

        router.push("/dashboard");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    router.push("/login");
  };

  return (
    <UserContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
