import QuickLinkCard from "@/components/quick-link-card";
import {QUICK_LINKS, ANNOUNCEMENT_DATA, CLASS_RECORDINGS} from "@/assets/data";
import {H2} from "@/components/ui/typography";
import AnnouncementCard from "@/components/announcement-card";
import ClassRecordingCard from "@/components/class-recording-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url(/bg-vector.svg)] bg-cover bg-center bg-no-repeat p-[20px] sm:p-[60px]">
      <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div>
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
              />
            ))}
          </div>
        </div>
        <div>
          <H2>Access Class Recordings</H2>
          <div className="mt-3">
            <ClassRecordingCard data={CLASS_RECORDINGS} />
          </div>
        </div>
      </div>
    </main>
  );
}
