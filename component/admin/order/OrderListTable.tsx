import React, { FC } from "react";

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

const OrderListTable: FC<{ order: Order }> = ({ order }) => {
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
      <td className="p-4 text-slate-700 text-center">{order.status}</td>
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
