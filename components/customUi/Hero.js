import { brandTitle } from "@/utils/content/generalSiteContent";
import Link from "next/link";

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
          <Link
            href={"/upload/video"}
            className="px-20 py-6 bg-black text-white text-xl hover:bg-gray-700 rounded-lg font-bold"
          >
            Upload Video
          </Link>
        </div>
      </main>
    </div>
  );
};
