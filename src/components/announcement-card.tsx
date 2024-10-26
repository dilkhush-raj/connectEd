"use client";
import {useState, useEffect} from "react";
import Card from "./card";

export default function AnnouncementCard({
  data,
}: {
  data: {icon?: React.ReactNode; announcement?: string}[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [data.length]);

  return (
    <>
      {/* Mobile View (Slider) */}
      <div className="block md:hidden">
        <Card className="border border-[#6669fe]/10 px-5 py-6">
          <div className="relative min-h-[64px] overflow-hidden">
            {data.map((item, index) => (
              <div
                key={index}
                className={`absolute w-full transform transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="flex items-center gap-2 rounded bg-[#f7f7f7] py-2 pl-4 pr-10 text-[#4749b3]">
                  <div className="h-6 w-6">{item.icon}</div>
                  <p className="text-xs font-light">{item.announcement}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-4 bg-[#4749b3]"
                    : "w-2 bg-[#6669fe]/20"
                }`}
                aria-label={`Go to announcement ${index + 1}`}
              />
            ))}
          </div>
        </Card>
      </div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <Card className="border border-[#6669fe]/10 px-5 py-6">
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
      </div>
    </>
  );
}
