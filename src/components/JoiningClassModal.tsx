import {BellIcon} from "@/assets/icons";
import Card from "./card";

export default function JoiningClassModal({
  data,
  handleClose,
}: {
  data: {
    standard: number;
    subject: string;
    date: string;
    day: string;
  } | null;
  handleClose: () => void;
}) {
  if (!data) return null;
  return (
    <>
      <div onClick={handleClose} className="fixed inset-0 z-50 bg-black/50">
        {/* This is masking area which will be visible only when modal is open and close the modal */}
      </div>
      <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 lg:fixed">
        <Card className="flex items-center gap-2 px-10 py-[10px] text-[#E66DFF]">
          <div className="h-4 w-[14px] flex-shrink-0">{BellIcon}</div>
          <p className="text-xs font-bold leading-[99%] lg:text-lg">
            Class {data.standard} {data.subject} is starting in 1 hour, 34
            minutes.
          </p>
        </Card>
        <Card className="px[58px] mx-auto mt-3 flex max-w-[392px] flex-col gap-[9px] py-[43px]">
          <p className="mx-auto w-[277px] text-center text-xl font-bold leading-none text-[#6669FE] md:text-2xl">
            You can join the live class 5 minutes before it starts. Please wait.
          </p>
          <button
            onClick={handleClose}
            className="mx-auto w-max rounded-[22px] bg-[#6669FE] px-6 py-[10px] text-sm font-bold text-white"
          >
            Okay.
          </button>
        </Card>
      </div>
    </>
  );
}
