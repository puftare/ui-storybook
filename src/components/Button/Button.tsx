import React, { HTMLProps } from "react";

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  text: string;
  type?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type,
  children,
  onClick,
  ...props
}) => {
  const buttonClasses =
    type === "primary"
      ? "bg-blue-500 hover:bg-blue-600 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-black";

  return (
    <button className={`px-4 py-2 rounded ${buttonClasses}`} onClick={onClick} {...props}>
      {text}
    </button>
  );
};
