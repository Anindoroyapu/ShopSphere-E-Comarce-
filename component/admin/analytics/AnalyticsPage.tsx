const AnalyticsPage = () => {
  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 5500 },
  ];
  const maxSales = Math.max(...salesData.map((d) => d.sales));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Sales Over Time
        </h2>
        <div className="h-64 flex justify-between items-end gap-2">
          {salesData.map((data) => (
            <div
              key={data.month}
              className="flex-1 flex flex-col items-center gap-2"
            >
              <div
                className="w-full bg-blue-500 rounded-t-md hover:bg-blue-600 transition-all"
                style={{ height: `${(data.sales / maxSales) * 100}%` }}
                title={`$${data.sales.toLocaleString()}`}
              ></div>
              <span className="text-xs font-medium text-slate-500">
                {data.month}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Top Products
        </h2>
        <ul>
          <li className="flex justify-between py-2 border-b">
            <span>Wireless Headphones</span> <span>250 sold</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span>Running Shoes</span> <span>180 sold</span>
          </li>
          <li className="flex justify-between py-2 border-b">
            <span>Yoga Mat</span> <span>150 sold</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Organic Green Tea</span> <span>120 sold</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AnalyticsPage;
