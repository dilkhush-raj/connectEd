import VideoPlayer from "./video-player";
import {CloseIcon} from "@/assets/icons";

interface DataProps {
  standard: string | number;
  subjects: string;
  topic: string;
}

export default function PlayerModal({
  data,
  handleClose,
}: {
  data: DataProps | null;
  handleClose: () => void;
}) {
  if (!data) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative mx-4 min-w-[75vw] rounded-[28px] bg-[#4749B3]">
        <div className="relative flex flex-col items-center justify-center gap-2 p-4">
          <p className="text-center text-base font-light leading-none text-white">
            Class {data?.standard} {data.subjects}
          </p>
          <h4 className="text-center font-['Outfit'] text-xl font-bold leading-tight text-white">
            {data.topic}
          </h4>

          <button onClick={handleClose} className="absolute right-3 top-2">
            {CloseIcon}
          </button>
        </div>
        <VideoPlayer videoUrl="/assets/video.jpeg" />
      </div>
    </div>
  );
}
