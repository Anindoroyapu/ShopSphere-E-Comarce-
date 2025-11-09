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

  return <div></div>;
};

export default MainPage;
