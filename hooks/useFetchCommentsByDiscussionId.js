"use client";
import { getAllCommentsByDiscussionId } from "@/services/globalApi";
import { useEffect, useState } from "react";

const useFetchCommentsByDiscussionId = (discussionId) => {
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState("");
  const [commentsLoading, setCommentsLoading] = useState(false);

  useEffect(() => {
    if (!discussionId) return;

    let mounted = true;

    async function fetchComments() {
      setCommentsLoading(true);
      const res = await getAllCommentsByDiscussionId(discussionId);

      if (mounted) {
        setComments(res.data.data);
        setTotalComments(res.data.totalComments);
        setCommentsLoading(false);
      }
    }

    fetchComments();

    return () => {
      mounted = false;
    };
  }, [discussionId]);

  const fetchLatestComments = async () => {
    const res = await getAllCommentsByDiscussionId(discussionId);
    setComments(res.data.data);
  };

  return { comments, totalComments, commentsLoading, fetchLatestComments };
};

export default useFetchCommentsByDiscussionId;
