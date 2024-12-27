"use client";
import VideoDetailsCard from "@/components/cards/VideoDetailsCard";
import { getVideoById } from "@/services/globalApi";
import { brandTitle } from "@/utils/content/generalSiteContent";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleVideo = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;

    async function fetchVideoDetails() {
      const res = await getVideoById(id);

      if (mounted) {
        setData(res.data.data);
      }
    }

    fetchVideoDetails();

    return () => {
      mounted = false;
    };
  }, [id]);

  useEffect(() => {
    if (!!data) {
      document.title = `${data.title} | ${brandTitle}`;
    }
  }, [data]);

  return (
    !!data && (
      <VideoDetailsCard
        videoUrl={data.videoUrl}
        title={data.title}
        description={data.description}
        incidentType={data.incidentType}
        location={data.location}
      />
    )
  );
};

export default SingleVideo;
