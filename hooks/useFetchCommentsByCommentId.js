"use client";

import { getAllRepliesByCommentId } from "@/services/globalApi";
import { useEffect, useState } from "react";

const useFetchCommentsByCommentId = (commentId) => {
  const [replies, setReplies] = useState([]);
  const [repliesLoading, setRepliesLoading] = useState(false);

  useEffect(() => {
    if (!commentId) return;

    let mounted = true;

    async function fetchReplies() {
      setRepliesLoading(true);
      const res = await getAllRepliesByCommentId(commentId);

      if (mounted) {
        setReplies(res.data.data);
        setRepliesLoading(false);
      }
    }

    fetchReplies();

    return () => {
      mounted = false;
    };
  }, [commentId]);

  const fetchLatestReplies = async () => {
    const res = await getAllRepliesByCommentId(commentId);
    setReplies(res.data.data);
  };

  return { replies, repliesLoading, fetchLatestReplies };
};

export default useFetchCommentsByCommentId;
