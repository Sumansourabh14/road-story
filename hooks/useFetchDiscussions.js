"use client";
import { getAllDiscussions } from "@/services/globalApi";
import { useEffect, useState } from "react";

const useFetchDiscussions = () => {
  const [discussions, setDiscussions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function fetchVideos() {
      setLoading(true);
      const res = await getAllDiscussions();

      if (mounted) {
        setDiscussions(res.data.data);
        setLoading(false);
      }
    }

    fetchVideos();

    return () => {
      mounted = false;
    };
  }, []);

  return { discussions, loading };
};

export default useFetchDiscussions;
