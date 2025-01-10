import { brandTitle } from "@/utils/content/generalSiteContent";
import Link from "next/link";
import UploadVideoBig from "../buttons/UploadVideoBig";

export const Hero = () => {
  return (
    <div className="flex justify-center px-8 gap-16 py-36 sm:py-48">
      <main className="flex flex-col gap-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">{brandTitle}</h1>
        <h2 className="text-2xl sm:text-3xl">
          Every dashcam video tells a story.
        </h2>
        <p>
          Upload any dashcam video/CCTV footage about anything unusual happening
          on Indian roads.
        </p>
        <div className="mt-8">
          <UploadVideoBig />
        </div>
      </main>
    </div>
  );
};
