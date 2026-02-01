import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg px-4 py-2 text-sm font-medium transition",
        variant === "primary"
          ? "bg-black text-white hover:bg-neutral-800"
          : "bg-neutral-200 text-black hover:bg-neutral-300",
        className
      )}
      {...props}
    />
  );
}
