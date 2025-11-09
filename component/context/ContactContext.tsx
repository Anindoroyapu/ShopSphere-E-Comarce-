"use client";

import React, { createContext, useContext, useState } from "react";

interface ContactContextType {
  loading: boolean;
  message: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const ContactContext = createContext<ContactContextType | null>(null);

export const ContactProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      // ✅ Laravel backend API route
      const res = await fetch("http://localhost:5050/api/Contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider value={{ loading, message, handleSubmit }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
};
