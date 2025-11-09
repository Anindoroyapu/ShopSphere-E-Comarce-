"use client";
import React from 'react';
import { useProduct } from '../contexts/ProductContext';
import { IconCheckCircle, IconXCircle } from './icons';

export const ToastContainer: React.FC = () => {
    const { toasts } = useProduct();

    return (
        <div className="fixed bottom-5 right-5 z-50 space-y-3 w-80">
            {toasts.map(toast => (
                <div 
                    key={toast.id}
                    className={`flex items-center gap-4 p-4 rounded-lg shadow-lg text-white animate-fade-in-up
                        ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    {toast.type === 'success' ? <IconCheckCircle className="h-6 w-6" /> : <IconXCircle className="h-6 w-6" />}
                    <span className="text-sm font-medium">{toast.message}</span>
                </div>
            ))}
        </div>
    );
};


const styles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}
`;

const ToastStyles = () => <style>{styles}</style>;

export const AppWithToastStyles: React.FC = () => {
    return (
        <>
            <ToastStyles />
            <ToastContainer />
        </>
    );
}
