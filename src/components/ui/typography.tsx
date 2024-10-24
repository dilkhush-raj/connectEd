import {cn} from "@/utils/cn";

export const H2 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={cn(
      "text-xl font-bold leading-tight text-[#393939] md:text-2xl md:leading-normal",
      className
    )}
  >
    {children}
  </h2>
);
