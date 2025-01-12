import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import UploadVideoForm from "@/components/forms/UploadVideoForm";
import SectionTitle from "@/components/text/SectionTitle";
import { brandTitle } from "@/utils/content/generalSiteContent";

export const metadata = {
  title: `Upload Video | ${brandTitle}`,
};

const UploadVideo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/data/road-safety-tips/random`
  );
  const data = await res.json();

  return (
    <CenteredPage>
      <div className="text-center pb-12">
        <SectionTitle title="Upload a Video" />
        <p className="pt-4 max-w-[720px] mx-auto">
          Upload any dashcam video/CCTV footage about anything unusual happening
          on Indian roads. No sign up required.
        </p>
      </div>
      <UploadVideoForm data={data} />
    </CenteredPage>
  );
};

export default UploadVideo;
