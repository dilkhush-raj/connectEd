import QuickLinkCard from "@/components/quick-link-card";
import {QUICK_LINKS, ANNOUNCEMENT_DATA} from "@/assets/data";
import {H2} from "@/components/ui/typography";
import AnnouncementCard from "@/components/announcement-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url(/bg-vector.svg)] bg-cover bg-center bg-no-repeat p-[60px]">
      <div className="mx-auto grid w-max grid-cols-1 gap-6 md:grid-cols-3">
        <div className="mb-10">
          <H2>Announcements</H2>
          <div className="mt-3">
            <AnnouncementCard data={ANNOUNCEMENT_DATA} />
          </div>
        </div>
        <div className="">
          <H2>Quick Links</H2>
          <div className="mt-3 flex flex-col gap-[10px]">
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
      </div>
    </main>
  );
}
