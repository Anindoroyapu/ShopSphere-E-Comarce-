import { OrderConfirmationPageProps } from "../type";

const OrderConfirmationPage = ({
  setCurrentPage,
}: OrderConfirmationPageProps) => (
  <section className="py-16 bg-white flex items-center justify-center">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="bg-white p-12 rounded-lg text-center max-w-2xl mx-auto shadow-lg border">
        <svg
          className="w-20 h-20 text-[#0B1A3A] mx-auto mb-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Thank You For Your Order!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your order has been placed successfully. We&apos;ve sent a
          confirmation to your email address.
        </p>
        <button
          className="bg-[#0B1A3A] text-white py-3 px-8 rounded-md font-medium cursor-pointer transition-colors hover:text-[#D4AF37]"
          onClick={() => setCurrentPage("shop")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  </section>
);

export default OrderConfirmationPage;
