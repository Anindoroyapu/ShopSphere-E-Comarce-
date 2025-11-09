import { useEffect, useState } from "react";
import StatusBadge from "../shared/StatusBadge";

const ProductsPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get<any>(`/Booking`);
        console.log(data, "data");
        setProducts(data as any);
      } catch (ex: any) {
        setMessage("error", handleAxiosError(ex));
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold text-slate-800">Products</h2>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition">
          Add New Product
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Product Name
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Category
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Price
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Stock
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Status
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
              >
                <td className="p-4 text-slate-700 font-medium">
                  {product.name}
                </td>
                <td className="p-4 text-slate-700">{product.category}</td>
                <td className="p-4 text-slate-700">{product.price}</td>
                <td
                  className={`p-4 font-medium ${
                    product.stock > 0 ? "text-slate-700" : "text-red-600"
                  }`}
                >
                  {product.stock}
                </td>
                <td className="p-4">
                  <StatusBadge status={product.status} />
                </td>
                <td className="p-4 flex gap-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="text-red-600 hover:underline font-medium"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductsPage;
