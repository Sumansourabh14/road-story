"use client";
import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import UploadVideoForm from "@/components/forms/UploadVideoForm";
import SectionTitle from "@/components/text/SectionTitle";
import { brandTitle } from "@/utils/content/generalSiteContent";
import React, { useEffect } from "react";

const UploadVideo = () => {
  useEffect(() => {
    document.title = `Upload Video | ${brandTitle}`;
  }, []);

  return (
    <CenteredPage>
      <div className="text-center pb-12">
        <SectionTitle title="Upload a Video" />
        <p className="pt-4">Upload any video</p>
      </div>
      <UploadVideoForm />
    </CenteredPage>
  );
};

export default UploadVideo;
