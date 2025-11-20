"use client";
import { useEffect, useMemo, useState } from "react";
import StatusBadge from "../shared/StatusBadge";
import { useTemplate } from "@/component/liveflashback/contexts/template/TemplateProvider";
import useApi from "@/component/liveflashback/utils/useApi";
import { handleAxiosError } from "@/component/liveflashback/utils/handleAxiosError";

const OrdersPage = () => {
  const [allOrders, setAllOrders] = useState<any[]>([]);
  // const { setMessage } = useTemplate();
  // const { get } = useApi();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await get<any[]>("Checkout");
  //       setAllOrders(data || []);
  //     } catch (ex) {
  //       setMessage("error", handleAxiosError(ex));
  //       console.log("dataaaaaa");
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://admin.ashaa.xyz/api/Checkout");
      const json = await res.json();
      setAllOrders(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(allOrders, "data");

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

  // const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);

  // const paginatedOrders = useMemo(() => {
  //   const startIndex = (currentPage - 1) * ORDERS_PER_PAGE;
  //   return filteredOrders.slice(startIndex, startIndex + ORDERS_PER_PAGE);
  // }, [filteredOrders, currentPage]);

  // const handleNextPage = () => {
  //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  // };

  // const handlePrevPage = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 1));
  // };

  const allStatuses = [
    "All",
    "Shipped",
    "Processing",
    "Delivered",
    "Pending",
    "Cancelled",
  ];

  return (
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
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Order ID
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Customer
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Phone
              </th><th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Address
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Product
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Quantity
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Size
              </th>{" "}
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Shipping
              </th>{" "}
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Total
              </th><th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Date
              </th>{" "}
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            {allOrders.length > 0 ? (
              allOrders
                .slice()
                .reverse()
                .map((order) => (
                  <tr
                    key={order.id}
                    className="border-b text-sm border-slate-200 last:border-b-0 hover:bg-slate-50"
                  >
                    <td className="p-4 text-slate-700 font-medium">
                      {order.id}
                    </td>
                    <td className="p-4 text-slate-700">{order.fullName}</td>
                    <td className="p-4 text-slate-700">
                      {order.phone} <br />
                      {order.email}
                    </td><td className="p-4 text-slate-700 text-sm">{order.address}</td>
                    <td className="p-4 text-slate-700">{order.productName}</td>
                    <td className="p-4 text-slate-700 text-center">{order.quantity}</td>
                    <td className="p-4 text-slate-700 text-center">{order.size}</td>
                    <td className="p-4 text-slate-700 text-center">{order.shipping}</td>
                    <td className="p-4 text-slate-700">{order.total}</td>
                    <td className="p-4 text-xs text-slate-700">
                      {new Date(order.createdAt).toLocaleTimeString()} <br />
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>

                    <td className="p-4 text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                      View Details
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                {/* FIX: Changed colSpan to be a number */}
                <td colSpan={6} className="text-center p-8 text-slate-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <span className="text-sm text-slate-600">
            Page {currentPage} of {totalPages} ({filteredOrders.length} total
            orders)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-white border border-slate-300 text-slate-700 font-bold py-2 px-4 rounded-md text-sm hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-white border border-slate-300 text-slate-700 font-bold py-2 px-4 rounded-md text-sm hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default OrdersPage;
