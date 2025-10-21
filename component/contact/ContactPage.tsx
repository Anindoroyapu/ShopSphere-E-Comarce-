"use client";

import { ContactProvider, useContact } from "@/context/ContactContext";
import { ContactFormSection } from "./ContactFormSection";
import { ContactInfo } from "./ContactInfo";


const ContactContent = () => {
  const { handleSubmit, loading, message } = useContact();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-4xl font-semibold mb-12 text-gray-800">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>

            <ContactFormSection handleSubmit={handleSubmit} />

            {loading && (
              <p className="text-gray-500 mt-3 text-center">Sending message...</p>
            )}
            {message && <p className="mt-3 text-center">{message}</p>}
          </div>

          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default function ContactPage() {
  return (
    <ContactProvider>
      <ContactContent />
    </ContactProvider>
  );
}
