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
  status: string[]; // list of statuses in order
  btncolor?: string[];
};

const OrderListTable: FC<Props> = ({ order, status, btncolor }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>(
    order.status ?? ""
  );
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // determine next status based on the provided status list
  const currentIndex = status.indexOf(selectedStatus);
  const nextStatus = currentIndex >= 0 ? status[currentIndex + 1] : undefined;
  const hasNext = typeof nextStatus === "string";

  const onStatusChange = async (id: string | number, newStatus: string) => {
    try {
      setIsSaving(true);
      const res = await fetch(
        `https://admin.ashaa.xyz/api/Checkout/status/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newStatus),
        }
      );
      if (!res.ok) throw new Error("Network response was not ok");
      setSelectedStatus(newStatus);
      setIsSaving(false);
      setShowConfirm(false);
    } catch (error) {
      console.error("Failed to update status", error);
      // optionally show toast/error message
    } finally {
    }
  };

  const handleConfirm = () => {
    if (!hasNext) return;
    onStatusChange(order.id, nextStatus as string);
  };

  return (
    <>
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

        {/* status column: show current status (e.g., "pending") */}
        <td className="p-4 text-slate-700 text-center">
          {(() => {
            const currentColor =
              btncolor && btncolor[currentIndex]
                ? btncolor[currentIndex]
                : "text-slate-700";
            const textColorClass = currentColor.startsWith("bg-")
              ? currentColor.replace(/^bg-/, "text-")
              : currentColor;
            return (
              <span
                className={`inline-block px-2 py-1 rounded text-sm ${textColorClass}`}
              >
                {selectedStatus || "—"}
              </span>
            );
          })()}
        </td>

        <td className="p-4 text-xs text-slate-700">
          {new Date(order.createdAt).toLocaleTimeString()} <br />
          {new Date(order.createdAt).toLocaleDateString()}
        </td>

        {/* action column: button to move to next status (opens confirm modal) */}
        <td className="p-4 text-sm font-medium text-blue-600">
          <button
            onClick={() => setShowConfirm(true)}
            disabled={!hasNext || isSaving}
            className={`px-3 py-1 rounded cursor-pointer ${
              hasNext
                ? `${
                    btncolor ? btncolor[currentIndex + 1] : "bg-blue-600"
                  } text-white hover:bg-blue-700`
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {hasNext ? `To be ${nextStatus}` : "No next status"}
          </button>
        </td>
      </tr>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black text-black opacity-40"
            onClick={() => !isSaving && setShowConfirm(false)}
          />
          <div className="relative bg-white rounded shadow-lg w-11/12 max-w-md p-6 z-10">
            <h3 className="text-lg font-semibold mb-3">
              Confirm status change
            </h3>
            <p className="mb-4">
              Change order #{order.id} status from{" "}
              <strong>{selectedStatus || "—"}</strong> to{" "}
              <strong>{nextStatus}</strong>?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => !isSaving && setShowConfirm(false)}
                className="px-3 py-1 rounded border"
                disabled={isSaving}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-3 py-1 rounded bg-blue-600 "
                disabled={isSaving}
              >
                {isSaving ? "Saving..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderListTable;
