import React, { FC } from "react";
import cn from "classnames";

type ButtonTypes = {
  /**
   * Type of the button
   */
  type?: string;
  /**
   * Label of the button
   */
  label: string;
  /**
   * Boolean value to define the button style
   */
  disabled?: boolean;
  /**
   * Button click action
   */
  onClick(): void;
};

export const Button: FC<ButtonTypes> = ({
  onClick,
  label = "Some label",
  disabled = false,
  type = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded outline-none focus:outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg",
        {
          "bg-red-500 ring-red-300": !disabled && type === "danger",
          "bg-blue-500 ring-blue-300": !disabled && type === "primary",
          "bg-gray-500 ring-gray-300": !disabled && type === "secondary",
          "bg-yellow-500 ring-yellow-300": !disabled && type === "warning",
          "bg-blue-400 ring-blue-200": !disabled && type === "info",
          "bg-gray-100 opacity-25 ring-blue-200 cursor-not-allowed": disabled,
        }
      )}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  );
};
