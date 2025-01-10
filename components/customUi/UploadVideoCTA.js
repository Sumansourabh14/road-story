import Link from "next/link";
import SectionTitle from "../text/SectionTitle";
import { brandEmail, brandTitle } from "@/utils/content/generalSiteContent";
import UploadVideoBig from "../buttons/UploadVideoBig";

const UploadVideoCTA = () => {
  return (
    <section className="flex flex-col justify-center px-8 py-20 sm:py-28 max-w-[1300px] mx-auto">
      <section className="text-left space-y-10">
        <div className="text-center">
          <SectionTitle title="Have any video? Share it here!" />
        </div>
        <div className="flex flex-col gap-16 justify-center items-center">
          <p className="text-center">
            Your video will be posted on all the social media channels of{" "}
            {brandTitle}. <strong>No sign up required.</strong>
          </p>
          <div>
            <UploadVideoBig />
          </div>
          <p className="text-center">
            Or send it on{" "}
            <Link
              href={`mailto:${brandEmail}`}
              className="underline hover:underline-offset-8 font-medium"
            >
              {brandEmail}
            </Link>
          </p>
        </div>
      </section>
    </section>
  );
};

export default UploadVideoCTA;
