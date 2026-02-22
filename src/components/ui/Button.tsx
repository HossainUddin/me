import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  fullWidth?: boolean; // Added fullWidth prop
  href?: string; // Added href prop for anchor tag
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, fullWidth = false, href, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/25',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    const classes = cn(
      'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
      fullWidth && 'w-full', // Apply fullWidth class
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>} // Cast ref for anchor element
          href={href}
          className={classes}
          {...props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>} // Cast props for anchor element
        >
          <div className="flex items-center justify-center gap-2">
            {children}
          </div>
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>} // Cast ref for button element
        className={classes}
        {...props as React.ButtonHTMLAttributes<HTMLButtonElement>} // Cast props for button element
      >
        <div className="flex items-center justify-center gap-2">
          {children}
        </div>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, cn };
