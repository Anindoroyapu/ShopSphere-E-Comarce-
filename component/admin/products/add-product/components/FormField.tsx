
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface FormFieldProps {
  label: string;
  name: string;
  as?: 'input' | 'textarea' | 'select';
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
  step?: string;
  prefix?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  as = 'input',
  type = 'text',
  value,
  onChange,
  
  required = false,
  children,
  step,
  prefix,
}) => {
  const isFilled = String(value).length > 0;

  const commonProps = {
    id: name,
    name,
    value,
    onChange,
    placeholder: ' ', // A space is needed for the peer-placeholder-shown selector to work
    required,
    step,
    className: `peer block w-full rounded-lg border border-slate-300 bg-white px-4 pb-2.5 pt-5 text-sm text-slate-900 shadow-sm transition-colors focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 ${
      prefix ? 'pl-7' : ''
    }`,
  };

  const renderInput = () => {
    switch (as) {
      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`block w-full rounded-lg border-slate-300 py-3 px-3 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm ${
              isFilled ? 'text-slate-900' : 'text-slate-500'
            }`}
          >
            {children}
          </select>
        );
      case 'textarea':
        // Adjust rows to feel natural with the new padding
        return <textarea {...(commonProps as TextAreaProps)} rows={5} />;
      default:
        return <input {...(commonProps as InputProps)} type={type} />;
    }
  };

  // For select, we use a simpler layout without the floating label.
  if (as === 'select') {
    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1.5">
          {label}
        </label>
        {renderInput()}
      </div>
    );
  }

  return (
    <div className="relative">
      {renderInput()}
      <label
        htmlFor={name}
        className={`
          pointer-events-none absolute bg-white text-slate-500 duration-300 transform
          -translate-y-4 scale-75 top-4 z-10 origin-[0] px-2
          peer-focus:px-2 peer-focus:text-indigo-600
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-1/2
          peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4
          ${prefix ? 'left-5' : 'left-2'}
        `}
      >
        {label}
      </label>
      {prefix && (
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-3">
          <span className="text-slate-500 sm:text-sm">{prefix}</span>
        </div>
      )}
    </div>
  );
};

export default FormField;
