"use client";
import Sidebar from "@/component/admin/sidebar/Sidebar";
import "../globals.css";
import Header from "@/component/admin/header/Header";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main>
      <div className="relative min-h-screen lg:flex">
        <Sidebar
          activePage={activePage}
          setActivePage={(page: string) => {
            setActivePage(page);
            setSidebarOpen(false);
          }}
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="flex-1   lg:ml-64 bg-slate-100">
          <Header title={activePage} setSidebarOpen={setSidebarOpen} />
          <main className="p-4 sm:p-6 lg:p-8 pt-0"> {children}</main>
        </div>
      </div>
      {/* <AuthCheckProvider> */}
      {/* </AuthCheckProvider> */}
    </main>
  );
}
