"use client";
import { getAllCommentsByDiscussionId } from "@/services/globalApi";
import { useEffect, useState } from "react";

const useFetchCommentsByDiscussionId = (discussionId) => {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);

  useEffect(() => {
    if (!discussionId) return;

    let mounted = true;

    async function fetchComments() {
      setCommentsLoading(true);
      const res = await getAllCommentsByDiscussionId(discussionId);

      if (mounted) {
        setComments(res.data.data);
        setCommentsLoading(false);
      }
    }

    fetchComments();

    return () => {
      mounted = false;
    };
  }, [discussionId]);

  return { comments, commentsLoading };
};

export default useFetchCommentsByDiscussionId;
