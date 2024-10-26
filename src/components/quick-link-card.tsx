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
        "flex cursor-pointer items-center md:flex-col md:justify-center md:px-[61px] md:py-[40px]"
      )}
    >
      <div className="flex aspect-square h-full flex-shrink-0 items-center justify-center rounded-lg bg-white/20 px-4 py-10 md:w-10 md:bg-transparent md:p-0">
        <div className="aspect-square w-9 md:h-[26px] md:w-[26px]">{icon}</div>
      </div>
      <h2 className="m-6 text-xl font-bold leading-normal md:m-0 md:mt-1 md:text-center md:text-2xl">
        {title}
      </h2>
      <p className="hidden text-center text-xs font-normal leading-3 md:block">
        {description}
      </p>
    </Card>
  );
}
