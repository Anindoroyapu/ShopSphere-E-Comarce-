const SettingsPage = () => {
  const profileFields = [
    { id: "name", label: "Name", type: "text", defaultValue: "Admin" },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      defaultValue: "admin@geminicommerce.com",
    },
    {
      id: "password",
      label: "New Password",
      type: "password",
      placeholder: "••••••••",
    },
  ];

  const storeFields = [
    {
      id: "storeName",
      label: "Store Name",
      type: "text",
      defaultValue: "Gemini Commerce",
    },
  ];

  const currencies = ["USD", "EUR", "GBP"];

  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-800 mb-6 border-b pb-4">
        Settings
      </h2>
      <form className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-slate-700 mb-4">
            Admin Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileFields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-slate-600 mb-1"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  defaultValue={field.defaultValue}
                  placeholder={field.placeholder}
                  className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-slate-700 mb-4">
            Store Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {storeFields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-slate-600 mb-1"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  defaultValue={field.defaultValue}
                  className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            ))}
            <div>
              <label
                htmlFor="currency"
                className="block text-sm font-medium text-slate-600 mb-1"
              >
                Currency
              </label>
              <select
                id="currency"
                className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                {currencies.map((currency) => (
                  <option key={currency}>{currency}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
export default SettingsPage;
