import React, { ButtonHTMLAttributes } from "react";

export enum Variant {
  Primary = "primary",
  Secondary = "secondary",
  Warning = "warning",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: Variant;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = Variant.Primary,
  disabled,
  children,
  onClick,
  ...props
}) => {
  const buttonClasses =
    variant === Variant.Primary
      ? "bg-blue-500 hover:bg-blue-600 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-black";

  return (
    <button
      className={`px-4 py-2 rounded ${buttonClasses}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};
