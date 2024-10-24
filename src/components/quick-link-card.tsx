import {cn} from "@/utils/cn";
import Card from "./card";

export default function QuickLinkCard({
  icon,
  title,
  description,
  variant,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "base" | "primary" | "secondary" | "tertiary";
  className?: string;
}) {
  return (
    <Card
      variant={variant || "base"}
      className={cn(
        className,
        "flex cursor-pointer flex-col items-center justify-center px-[61px] py-[40px]"
      )}
    >
      {icon}
      <h2 className="mt-[16px] text-center text-2xl font-bold leading-normal">
        {title}
      </h2>
      <p className="text-center text-xs font-normal leading-3">{description}</p>
    </Card>
  );
}
