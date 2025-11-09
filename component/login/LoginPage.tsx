"use client";

import Image from "next/image";
import React, { FC, useState, useContext } from "react";
import EyeIcon from "@/public/icons/eye.svg";
import CloseIcon from "@/public/icons/eye-close.svg";
import { UserContext } from "@/component/context/UserContext";

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const LabelItem: FC<{ text: string }> = ({ text }) => (
    <label className="block text-gray-700 mb-1">{text}</label>
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-[#0B1A3A] mb-8 text-center">
          Admin Login
        </h2>

        <div className="space-y-4">
          {/* Email */}
          <div>
            <LabelItem text="Email" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <LabelItem text="Password" />
            <div className="w-full border rounded flex items-center">
              <input
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 px-3 py-2 outline-none"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="px-2"
              >
                <Image
                  alt="Toggle password visibility"
                  src={isPasswordVisible ? EyeIcon : CloseIcon}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#0B1A3A] text-white rounded hover:text-[#D4AF37] transition h-[40px] w-[150px] ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
