/* eslint-disable @next/next/no-img-element */
"use client";
import {SearchIcon} from "@/assets/icons";
import Card from "./card";
import VideoCard from "./video-card";
import {useState, useMemo} from "react";
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

  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("This Week");
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");

  const handleClose = () => {
    setSelectedRecording(null);
  };

  const filterData = useMemo(() => {
    return data.filter((video) => {
      const searchMatch =
        video.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.subjects.toLowerCase().includes(searchQuery.toLowerCase());

      let dateMatch = true;
      const videoDate = new Date(video.date);
      const currentDate = new Date();
      const daysDifference = Math.floor(
        (currentDate.getTime() - videoDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      switch (dateFilter) {
        case "Today":
          dateMatch = daysDifference === 0;
          break;
        case "This Week":
          dateMatch = daysDifference <= 7;
          break;
        case "This Month":
          dateMatch = daysDifference <= 30;
          break;
        case "All":
        default:
          dateMatch = true;
          break;
      }

      const subjectMatch =
        subjectFilter === "All Subjects" || video.subjects === subjectFilter;

      return searchMatch && dateMatch && subjectMatch;
    });
  }, [data, searchQuery, dateFilter, subjectFilter]);

  const subjects = useMemo(() => {
    const uniqueSubjects = new Set(data.map((video) => video.subjects));
    return ["All Subjects", ...Array.from(uniqueSubjects)];
  }, [data]);

  return (
    <Card className="h-full px-6 py-8">
      {selectedRecording && (
        <PlayerModal data={selectedRecording?.data} handleClose={handleClose} />
      )}
      <div className="flex items-center gap-2 rounded bg-[#4749b3]/5 px-3 py-2">
        {SearchIcon}{" "}
        <input
          placeholder="Search for class recordings"
          className="w-full bg-transparent focus:outline-none"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span>Filter By:</span>
        <div className="flex flex-wrap items-center gap-3 text-[#979797]">
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="rounded bg-[#f6f6fb] p-2"
          >
            <option value="All">All</option>
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
          </select>
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="rounded bg-[#f6f6fb] p-2"
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        {filterData.length > 0 ? (
          filterData.map((video) => (
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
          ))
        ) : (
          <div className="text-center text-gray-500">
            No recordings found matching your filters
          </div>
        )}
      </div>
    </Card>
  );
}
