const CustomersPage = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      orders: 5,
      totalSpent: "$450.00",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      orders: 2,
      totalSpent: "$120.50",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.j@example.com",
      orders: 10,
      totalSpent: "$1250.10",
    },
    {
      id: 4,
      name: "Emily Brown",
      email: "emily.b@example.com",
      orders: 1,
      totalSpent: "$45.00",
    },
  ];
  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold text-slate-800">Customers</h2>
        <input
          type="text"
          placeholder="Search customers..."
          className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Name
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Email
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Orders
              </th>
              <th className="p-4 font-bold text-slate-500 uppercase text-xs tracking-wider">
                Total Spent
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
              >
                <td className="p-4 text-slate-700 font-medium">
                  {customer.name}
                </td>
                <td className="p-4 text-slate-700">{customer.email}</td>
                <td className="p-4 text-slate-700">{customer.orders}</td>
                <td className="p-4 text-slate-700">{customer.totalSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersPage;
