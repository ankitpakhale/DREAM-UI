import React, { ButtonHTMLAttributes, ForwardedRef } from "react";
import clsx from "clsx";

// Gradient variants for all button types
const VARIANT_CLASSES = {
  primary:
    "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 dark:from-blue-600 dark:via-blue-700 dark:to-blue-800 text-white",
  secondary:
    "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 text-white",
  success:
    "bg-gradient-to-r from-green-400 via-green-500 to-green-600 dark:from-green-600 dark:via-green-700 dark:to-green-800 text-white",
  danger:
    "bg-gradient-to-r from-red-400 via-red-500 to-red-600 dark:from-red-600 dark:via-red-700 dark:to-red-800 text-white",
  warning:
    "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 dark:from-yellow-600 dark:via-yellow-700 dark:to-yellow-800 text-black",
  info: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 dark:from-teal-600 dark:via-teal-700 dark:to-teal-800 text-white",
  outline:
    "border border-gray-900 text-black dark:border-gray-100 dark:text-white",
} as const;

// Size classes
const SIZE_CLASSES = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
} as const;

// Type for variant and size keys
type Variant = keyof typeof VARIANT_CLASSES;
type Size = keyof typeof SIZE_CLASSES;

// Props for Button
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  className?: string;
}

/**
 * Button component with gradient variants and size options for both light & dark modes.
 */
export const Button = React.forwardRef(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const variantClass = VARIANT_CLASSES[variant];
    const sizeClass = SIZE_CLASSES[size];

    return (
      <button
        ref={ref}
        className={clsx(
          "w-auto flex font-semibold rounded shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
          variantClass,
          sizeClass,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
