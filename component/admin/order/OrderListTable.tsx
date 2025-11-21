import React, { FC, useState } from "react";

type Order = {
  id: string | number;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  productName: string;
  quantity: number;
  size?: string | number;
  shipping?: string;
  total: number | string;
  createdAt: string | number;
  status?: string;
};

type Props = {
  order: Order;
  status: string[]; // list of statuses to choose from
  // onStatusChange: (id: string | number, status: string) => void; // called when status is changed
};

const OrderListTable: FC<Props> = ({ order, status }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>(
    order.status ?? ""
  );
  const onStatusChange = async (id: string | number, status: string) => {
    try {
      await fetch(`https://localhost:5050/api/Checkout/status/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    onStatusChange(order.id, newStatus);
  };

  return (
    <tr className="border-b text-sm border-slate-200 last:border-b-0 hover:bg-slate-50">
      <td className="p-4 text-slate-700 font-medium">{order.id}</td>
      <td className="p-4 text-slate-700">{order.fullName}</td>
      <td className="p-4 text-slate-700">
        {order.phone} <br />
        {order.email}
      </td>
      <td className="p-4 text-slate-700 text-sm">{order.address}</td>
      <td className="p-4 text-slate-700">{order.productName}</td>
      <td className="p-4 text-slate-700 text-center">{order.quantity}</td>
      <td className="p-4 text-slate-700 text-center">{order.size}</td>
      <td className="p-4 text-slate-700 text-center">{order.shipping}</td>
      <td className="p-4 text-slate-700">{order.total}</td>

      <td className="p-4 text-slate-700 text-center">
        <select
          value={selectedStatus}
          onChange={handleChange}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="" disabled>
            Select status
          </option>
          {status.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </td>

      <td className="p-4 text-xs text-slate-700">
        {new Date(order.createdAt).toLocaleTimeString()} <br />
        {new Date(order.createdAt).toLocaleDateString()}
      </td>

      <td className="p-4 text-sm font-medium text-blue-600 hover:underline cursor-pointer">
        View Details
      </td>
    </tr>
  );
};

export default OrderListTable;
