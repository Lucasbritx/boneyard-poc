import { Skeleton } from "boneyard-js/react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  id: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "medium",
  id,
}) => {
  const baseClass = "button";
  const variantClass = `button--${variant}`;
  const sizeClass = `button--${size}`;

  return (
    <Skeleton name={id} loading={true}>
      <button
        className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Skeleton>
  );
};
