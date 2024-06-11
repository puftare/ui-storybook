import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: "button" | "submit";
  variant?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  variant,
  disabled,
  children,
  onClick,
  ...props
}) => {
  const buttonClasses =
    variant === "primary"
      ? "bg-blue-500 hover:bg-blue-600 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-black";

  return (
    <button
      className={`px-4 py-2 rounded ${buttonClasses}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};
