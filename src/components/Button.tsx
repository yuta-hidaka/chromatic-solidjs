// Create Soiid button component
import { JSX } from "solid-js";

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = (props: ButtonProps) => {
  const { variant = "primary", children, ...rest } = props;

  return (
    <button
      class={`px-4 py-2 rounded-md text-white ${
        variant === "primary" ? "bg-blue-500" : "bg-gray-500"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
