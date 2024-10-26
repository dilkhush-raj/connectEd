"use client";
import {VideoCameraIcon} from "@/assets/icons";
import Card from "./card";

const SCHEDULES_DATA: {
  standard: number;
  subject: string;
  date: string;
  day: string;
}[] = [
  {
    standard: 7,
    subject: "Science",
    date: "Tuesday, 5:00 - 5:50 PM",
    day: "Yesterday",
  },
  {
    standard: 7,
    subject: "Science",
    date: "Tuesday, 6:30 - 7:15 PM",
    day: "Today",
  },
  {
    standard: 7,
    subject: "Science",
    date: "Tuesday, 5 - 5:50 PM",
    day: "Tomorrow",
  },
  {
    standard: 7,
    subject: "Science",
    date: "Tuesday, 5 - 5:50 PM",
    day: "23rd Sept, 2024",
  },
];

export default function Schedules() {
  return (
    <div>
      <Card className="px-5 py-8">
        <div className="flex flex-col gap-2">
          {SCHEDULES_DATA.map((schedule, index) => (
            <ScheduleItem
              key={index}
              index={index}
              standard={schedule.standard}
              subject={schedule.subject}
              date={schedule.date}
              day={schedule.day}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

const ScheduleItem = ({
  standard,
  subject,
  date,
  day,
  index,
}: {
  standard: number;
  subject: string;
  date: string;
  day: string;
  index: number;
}) => {
  return (
    <div
      className={`group flex cursor-pointer items-center justify-between gap-2 rounded bg-[#f2f2ff] p-4 transition-all duration-100 hover:text-white ${index % 2 === 0 ? "text-[#4749b3] hover:bg-[#4749b3]" : "text-[#e66dff] hover:bg-[#e66dff]"}`}
    >
      <div className="flex items-center gap-2">
        <div>{VideoCameraIcon}</div>
        <div className="flex flex-col gap-[9px]">
          <p
            className={`text-xs font-light leading-none group-hover:text-white ${index % 2 === 0 ? "text-[#9899de]" : "text-[#efaafd]"}`}
          >
            Class {standard}, {subject} | Live Class
          </p>
          <p className="font-semibold leading-none">{date}</p>
        </div>
      </div>
      <p className="e text-right text-[10px] font-normal">{day}</p>
    </div>
  );
};
