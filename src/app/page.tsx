import QuickLinkCard from "@/components/quick-link-card";
import {QUICK_LINKS, ANNOUNCEMENT_DATA, CLASS_RECORDINGS} from "@/assets/data";
import {H2} from "@/components/ui/typography";
import AnnouncementCard from "@/components/announcement-card";
import ClassRecordingCard from "@/components/class-recording-card";
import Schedules from "@/components/schedules";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-98px)] bg-[url(/bg-vector.svg)] bg-cover bg-center bg-no-repeat p-[20px] sm:p-[60px]">
      <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-[38%_1fr_1fr]">
        <div>
          <H2>Announcements</H2>
          <div className="mt-3">
            <AnnouncementCard data={ANNOUNCEMENT_DATA} />
          </div>
          <div className="mt-3 hidden lg:block">
            <H2>Your Class Schedule</H2>
            <div className="mt-3">
              <Schedules />
            </div>
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
        <div className="lg:hidden">
          <H2>Your Class Schedule</H2>
          <div className="mt-3">
            <Schedules />
          </div>
        </div>
        <div className="overflow-hidden rounded-[20px] md:max-h-[618px]">
          <H2>Access Class Recordings</H2>
          <div className="mt-3 h-full">
            <ClassRecordingCard data={CLASS_RECORDINGS} />
          </div>
        </div>
      </div>
    </main>
  );
}
