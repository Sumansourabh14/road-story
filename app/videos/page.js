"use client";
import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import VideoClips from "@/components/customUi/VideoClips";
import SectionTitle from "@/components/text/SectionTitle";
import { brandTitle } from "@/utils/content/generalSiteContent";
import { useEffect } from "react";

const Videos = () => {
  useEffect(() => {
    document.title = `Videos | ${brandTitle}`;
  }, []);

  return (
    <CenteredPage>
      <div className="text-center pb-12">
        <SectionTitle title="Videos" />
      </div>
      <VideoClips />
    </CenteredPage>
  );
};

export default Videos;
