import QuickLinkCard from "@/components/quick-link-card";
import {QUICK_LINKS} from "@/assets/data";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-4xl">
        <h2>Quick Links</h2>
        <div className="flex flex-col gap-[10px]">
          {QUICK_LINKS.map((link) => (
            <QuickLinkCard
              key={link?.id}
              icon={link?.icon}
              title={link?.title || ""}
              description={link?.description || ""}
              variant={link?.variant}
              className="w-[346px]"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
