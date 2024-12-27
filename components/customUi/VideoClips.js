"use client";
import { getAllVideos } from "@/services/globalApi";
import { useEffect, useState } from "react";
import VideoDetailsGrid from "../grid/VideoDetailsGrid";

const VideoClips = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function fetchVideos() {
      const res = await getAllVideos();

      if (mounted) {
        setVideos(res.data.data);
      }
    }

    fetchVideos();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <VideoDetailsGrid videos={videos} />
    </div>
  );
};

export default VideoClips;
