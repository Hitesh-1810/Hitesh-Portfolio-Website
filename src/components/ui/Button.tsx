import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
import Magnetic from './Magnetic';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  magnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', magnetic = true, children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all rounded-full group";
    
    const variants = {
      primary: "bg-accent text-white hover:bg-accent/90",
      secondary: "bg-secondary text-white hover:bg-secondary/80",
      outline: "border border-white/20 text-white hover:bg-white hover:text-primary",
    };

    const buttonContent = (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
        <span className="relative flex items-center gap-2">{children}</span>
      </button>
    );

    if (magnetic) {
      return <Magnetic>{buttonContent}</Magnetic>;
    }

    return buttonContent;
  }
);

Button.displayName = 'Button';
