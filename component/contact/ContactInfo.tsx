import React from "react";

export const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Contact Information
      </h3>
      <p className="mb-6">
        Have a question or want to learn more? Feel free to reach out to us
        through any of the channels below.
      </p>
      <div className="flex items-start gap-4 mb-6">
        <svg
          className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        <div>
          <strong>Address:</strong> Sector 15, Uttara, Dhaka 1230
        </div>
      </div>
      <div className="flex items-start gap-4 mb-6">
        <svg
          className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <div>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:liveflashback90@gmail.com"
            className="hover:text-blue-600"
          >
            liveflashback90@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <svg
          className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
          />
        </svg>
        <div>
          <strong>Phone:</strong>
          <a href="tel:01725663176" className="hover:text-blue-600">
            01725663176
          </a>
        </div>
      </div>
    </div>
  );
};
