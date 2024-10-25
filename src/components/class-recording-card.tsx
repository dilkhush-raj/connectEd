/* eslint-disable @next/next/no-img-element */
"use client";
import {SearchIcon} from "@/assets/icons";
import Card from "./card";
import VideoCard from "./video-card";
import {useState} from "react";
import PlayerModal from "./player-modal";

export default function ClassRecordingCard({
  data,
}: {
  data: {
    id: number;
    standard: number;
    subjects: string;
    topic: string;
    date: Date;
    videoUrl: string;
  }[];
}) {
  const [selectedRecording, setSelectedRecording] = useState<{
    isOpen: boolean;
    data: {
      standard: number;
      subjects: string;
      topic: string;
      videoUrl: string;
    };
  } | null>(null);
  const filterData = data;

  const handleClose = () => {
    setSelectedRecording(null);
  };

  return (
    <Card className="px-6 py-8">
      {selectedRecording && (
        <PlayerModal data={selectedRecording?.data} handleClose={handleClose} />
      )}
      <div className="flex items-center gap-2 rounded bg-[#4749b3]/5 px-3 py-2">
        {SearchIcon}{" "}
        <input
          placeholder="Search for class recordings"
          className="w-full bg-transparent focus:outline-none"
          type="search"
        />{" "}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span>Filter By:</span>
        <div className="flex flex-wrap items-center gap-3 text-[#979797]">
          <select
            name=""
            id=""
            defaultValue={"This Week"}
            className="rounded bg-[#f6f6fb] p-2"
          >
            <option value="All">All</option>
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
          </select>
          <select name="" id="" className="rounded bg-[#f6f6fb] p-2">
            <option value="All Subjects">All Subjects</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
          </select>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        {filterData.map((video) => (
          <div
            key={video.id}
            onClick={() => {
              setSelectedRecording({
                isOpen: true,
                data: video,
              });
            }}
            className="cursor-pointer"
          >
            <VideoCard
              standard={video.standard}
              subjects={video.subjects}
              topic={video.topic}
              videoUrl={video.videoUrl}
              date={video.date}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
