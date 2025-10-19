import "./globals.css";
import { UserProvider } from "@/context/UserContext"; // ✅ Context Provider
import { Geist, Geist_Mono } from "next/font/google";

export const metadata = {
  title: "liveflashback",
  description: "Developed by Anindo Roy Apu & Farabi Rakib",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
