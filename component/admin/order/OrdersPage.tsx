"use client";
import { useEffect, useState } from "react";

import OrderListTable from "./OrderListTable";
import OrderTabsSection from "./OrderTabsSection";
import OrderListTableHeaderSection from "./OrderListTableHeaderSection";
import OrderListProvider from "./context/OrderListProvider";

const OrdersPage = () => {
  // const [allOrders, setAllOrders] = useState<any[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch("https://admin.ashaa.xyz/api/Checkout");
  //     const json = await res.json();
  //     setAllOrders(json.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setLoading(false);
  //   }
  // };

  // console.log(allOrders, "data");

  const ORDERS_PER_PAGE = 10;
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // const filteredOrders = useMemo(() => {
  //   return allOrders
  //     .filter((order) => {
  //       if (statusFilter === "All") return true;
  //       return order.status === statusFilter;
  //     })
  //     .filter((order) => {
  //       const term = searchTerm.toLowerCase();
  //       return (
  //         order.id.toLowerCase().includes(term) ||
  //         order.customer.toLowerCase().includes(term)
  //       );
  //     });
  // }, [statusFilter, searchTerm]);

  const allStatuses = [
    "All",
    "Shipped",
    "Processing",
    "Delivered",
    "Pending",
    "Cancelled",
  ];

  return (
    <OrderListProvider>
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-xl font-semibold text-slate-800 shrink-0">
            All Orders
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search by ID or Customer..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full sm:w-48"
            />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white w-full sm:w-auto"
            >
              {allStatuses.map((status) => (
                <option key={status} value={status}>
                  {status === "All" ? "All Statuses" : status}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <OrderTabsSection />
        </div>
      </div>
    </OrderListProvider>
  );
};

export default OrdersPage;
