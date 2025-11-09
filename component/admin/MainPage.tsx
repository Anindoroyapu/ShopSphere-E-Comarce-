"use client";

import { useState } from "react";
import Dashboard from "./dashboard/Dashboard";
import OrdersPage from "./order/OrdersPage";
import ProductsPage from "./products/ProductsPage";
import CustomersPage from "./customar/CustomersPage";
import AnalyticsPage from "./analytics/AnalyticsPage";
import SettingsPage from "./setting/SettingsPage";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

const MainPage = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderActivePage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "Orders":
        return <OrdersPage />;
      case "Products":
        return <ProductsPage />;
      case "Customers":
        return <CustomersPage />;
      case "Analytics":
        return <AnalyticsPage />;
      case "Settings":
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
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
        <main className="p-4 sm:p-6 lg:p-8 pt-0">{renderActivePage()}</main>
      </div>
    </div>
  );
};

export default MainPage;
