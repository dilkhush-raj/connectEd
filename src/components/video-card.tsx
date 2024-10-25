import {PlayIcon} from "@/assets/icons";

/* eslint-disable @next/next/no-img-element */
const VideoCard = ({
  standard,
  subjects,
  topic,
  videoUrl,
  date,
}: {
  standard: number;
  subjects: string;
  topic: string;
  videoUrl: string;
  date: Date;
}) => {
  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", {month: "long"});
    const year = date.getFullYear();
    const getOrdinalSuffix = (day: number) => {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
  };

  const color: Record<
    string,
    {color: string; text: string; heading: string; border: string}
  > = {
    Math: {
      color: "bg-[#4749b3]",
      text: "text-[#4749b3] group-hover:text-[#A3A4D9]",
      heading: "group-hover:text-[#4749b3]",
      border: "hover:border-[#4749B3]",
    },
    Science: {
      color: "bg-[#e66dff]",
      text: "text-[#e66dff] group-hover:text-[#F2B6FF]",
      heading: "group-hover:text-[#e66dff]",
      border: "hover:border-[#E66DFF]",
    },
  };

  return (
    <div
      className={`group flex cursor-pointer items-center justify-between gap-4 border-b-[0.5px] border-black/10 pb-3 ${color[subjects].border}`}
    >
      <div className="flex flex-col justify-between">
        <div>
          <div
            className={`text-xs font-medium leading-3 ${color[subjects].text}`}
          >
            Class {standard} {subjects}
          </div>
          <h4
            className={`mt-2 text-base font-bold leading-none text-black ${color[subjects].heading}`}
          >
            {topic}
          </h4>
        </div>
        <div className="mt-3 text-[10px] font-normal leading-[9.90px] text-[#727272]">
          {formatDate(date)}
        </div>
      </div>
      <div className="relative overflow-hidden rounded">
        <div
          className={`absolute inset-0 ${color[subjects].color} mix-blend-multiply`}
        ></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:hidden">
          {PlayIcon}
        </div>
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-xs text-white group-hover:block">
          play now
        </div>
        <img src={videoUrl} alt="video" className="w-[100px] flex-shrink-0" />
      </div>
    </div>
  );
};

export default VideoCard;
