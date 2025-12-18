import React from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonFont = "normal" | "medium" | "semibold" | "bold";

interface ButtonsProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  font?: ButtonFont;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Buttons: React.FC<ButtonsProps> = ({
  children,
  onClick,
  size = "md",
  font = "medium",
  className = "",
  type = "button",
}) => {
  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const fonts: Record<ButtonFont, string> = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-lg
        transition-all duration-300
        transform hover:scale-105
        ${sizes[size]}
        ${fonts[font]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Buttons;
