import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 focus:ring-primary",
    secondary: "bg-secondary hover:bg-amber-600 text-white shadow-lg shadow-amber-200 focus:ring-secondary",
    success: "bg-success hover:bg-emerald-600 text-white shadow-lg shadow-emerald-200 focus:ring-success",
    danger: "bg-error hover:bg-red-600 text-white shadow-lg shadow-red-200 focus:ring-error",
    outline: "bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;