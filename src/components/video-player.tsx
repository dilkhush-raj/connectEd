import {
  FullscreenIcon,
  MuteIcon,
  Next15sIcon,
  PlayIcon2,
  Previous15sIcon,
} from "@/assets/icons";

/* eslint-disable @next/next/no-img-element */
export default function VideoPlayer({videoUrl}: {videoUrl: string}) {
  const videoLength = "1:20:21";
  const videoProgress = "35:28";
  const progressPercent = Math.round(
    (Number(videoProgress) / Number(videoLength)) * 100
  );

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-[#1E1E1E]">
      <img src={videoUrl} alt="video" className="w-full" />

      <div className="absolute bottom-0 left-0 right-0 h-[115.50px] w-full rounded-bl-[28px] rounded-br-[28px] bg-gradient-to-b from-[#14143400] to-[#131434] backdrop-blur-[1.40px]" />
      <div className="absolute bottom-5 left-7 right-7">
        <div className="relative w-full">
          <div className="absolute bottom-full right-0 mb-4 text-base font-light leading-none text-white">
            {videoProgress} / {videoLength}
          </div>
          <div className="absolute inset-0 h-0.5 rounded-[14px] bg-[#d9d9d9] opacity-40" />
          <div className="absolute inset-0 h-0.5 w-[415.08px] rounded-[14px] bg-[#e66dff]" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {PlayIcon2}
            {Previous15sIcon}
            {Next15sIcon}
          </div>
          <div className="flex items-center gap-2">
            {MuteIcon}
            {FullscreenIcon}
          </div>
        </div>
      </div>
    </div>
  );
}
