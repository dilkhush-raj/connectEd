import {cn} from "@/utils/cn";

type CardProps = {
  children: React.ReactNode;
  variant?: "base" | "primary" | "secondary" | "tertiary";
  className?: string;
};

export default function Card({
  children,
  variant = "base",
  className,
}: CardProps) {
  const variantClasses = {
    base: "bg-white",
    primary:
      "bg-primary text-white hover:bg-white hover:text-primary border border-[#4749b3]/10 transition-all duration-300",
    secondary:
      "bg-secondary text-white hover:bg-white hover:text-secondary border border-[#4749b3]/10 transition-all duration-300",
    tertiary:
      "bg-primary-dark text-white hover:bg-white hover:text-primary-dark border border-[#4749b3]/10 transition-all duration-300",
  };

  return (
    <div className={cn("rounded-[20px]", variantClasses[variant], className)}>
      {children}
    </div>
  );
}
