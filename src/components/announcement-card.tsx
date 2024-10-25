import Card from "./card";

export default function AnnouncementCard({
  data,
}: {
  data: {icon?: React.ReactNode; announcement?: string}[];
}) {
  return (
    <>
      <Card className="w-[395px] border border-[#6669fe]/10 px-[20px] py-[26px]">
        <div className="flex flex-col gap-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded bg-[#f7f7f7] py-2 pl-4 pr-10 text-[#4749b3]"
            >
              <div className="h-6 w-6">{item.icon}</div>
              <p className="text-xs font-light">{item.announcement}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
