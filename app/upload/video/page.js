"use client";
import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import UploadVideoForm from "@/components/forms/UploadVideoForm";
import SectionTitle from "@/components/text/SectionTitle";
import { brandTitle } from "@/utils/content/generalSiteContent";
import { useEffect } from "react";

const UploadVideo = () => {
  useEffect(() => {
    document.title = `Upload Video | ${brandTitle}`;
  }, []);

  return (
    <CenteredPage>
      <div className="text-center pb-12">
        <SectionTitle title="Upload a Video" />
        <p className="pt-4 max-w-[720px] mx-auto">
          Upload any dashcam video/CCTV footage about anything unusual happening
          on Indian roads. No sign up required.
        </p>
      </div>
      <UploadVideoForm />
    </CenteredPage>
  );
};

export default UploadVideo;
