import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import UploadVideoForm from "@/components/forms/UploadVideoForm";
import SectionTitle from "@/components/text/SectionTitle";
import { brandTitle } from "@/utils/content/generalSiteContent";

export const metadata = {
  title: `Upload Video | ${brandTitle}`,
};

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/data/road-safety-tips/random`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const UploadVideo = async () => {
  const data = await getData();

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
