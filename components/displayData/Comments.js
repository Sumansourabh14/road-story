"use client";

import { useToast } from "@/hooks/use-toast";
import useFetchCommentsByDiscussionId from "@/hooks/useFetchCommentsByDiscussionId";
import { removeComment } from "@/services/globalApi";
import { useSelector } from "react-redux";
import DeleteCommentPopup from "../popups/DeleteCommentPopup";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Reply } from "lucide-react";
import { useState } from "react";
import CommentReplyForm from "../forms/CommentReplyForm";
import LikeIcon from "../icons/LikeIcon";
import CommentIcon from "../icons/CommentIcon";
import Replies from "./Replies";

const Comments = ({ discussionId }) => {
  const [replyStates, setReplyStates] = useState({});
  const { comments, totalComments, commentsLoading, fetchLatestComments } =
    useFetchCommentsByDiscussionId(discussionId);
  const { toast } = useToast();
  const { user, token } = useSelector((state) => state.auth);

  const handleDeleteComment = async (commentId) => {
    const res = await removeComment(commentId, discussionId, token);

    if (res.status === 200) {
      toast({
        title: "Comment removed successfully!",
      });

      await fetchLatestComments();
    }
  };

  const toggleReply = (commentId) => {
    setReplyStates((prev) => ({
      ...prev,
      [commentId]: !prev[commentId], // Toggle reply state for this specific comment
    }));
  };

  if (commentsLoading) return <p>Loading comments...</p>;

  if (totalComments === 0) {
    return <p>0 Comments</p>;
  }

  return (
    <div className="max-w-xl py-4 flex flex-col gap-8">
      <p>{totalComments} Comments</p>
      {comments.map((comment) => (
        <Card className="pt-6" key={comment._id}>
          <CardContent>
            <p className="text-sm font-light mb-4">{comment.author.username}</p>
            <p className="mb-2 break-words">{comment.description}</p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <p>{comment.likes}</p>
                  <LikeIcon />
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <p>{comment.replies.length}</p>
                  <CommentIcon />
                </div>
                <Button onClick={() => toggleReply(comment._id)} title="Reply">
                  <Reply />
                </Button>
              </div>
              {user?._id === comment.author._id && (
                <DeleteCommentPopup
                  handleDelete={() => handleDeleteComment(comment._id)}
                />
              )}
            </div>
            {replyStates[comment._id] && (
              <div>
                <CommentReplyForm
                  discussionId={discussionId}
                  parentCommentId={comment._id}
                />
              </div>
            )}
            <Replies commentId={comment._id} discussionId={discussionId} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Comments;
