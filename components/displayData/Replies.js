"use client";

import { useToast } from "@/hooks/use-toast";
import useFetchCommentsByCommentId from "@/hooks/useFetchCommentsByCommentId";
import { removeCommentReply } from "@/services/globalApi";
import { useSelector } from "react-redux";
import LikeIcon from "../icons/LikeIcon";
import DeleteCommentPopup from "../popups/DeleteCommentPopup";
import { Card, CardContent } from "../ui/card";
import DisplayUsernamePublishedTime from "./DisplayUsernamePublishedTime";

const Replies = ({ commentId, discussionId }) => {
  const { replies, repliesLoading, fetchLatestReplies } =
    useFetchCommentsByCommentId(commentId);
  const { toast } = useToast();
  const { user, token } = useSelector((state) => state.auth);

  const handleDeleteComment = async (commentId, parentCommentId) => {
    const res = await removeCommentReply(commentId, parentCommentId, token);

    if (res.status === 200) {
      toast({
        title: "Comment reply removed successfully!",
      });

      await fetchLatestReplies();
    }
  };

  if (repliesLoading) return <p>Loading any replies...</p>;

  if (replies.length === 0) {
    return null;
  }

  return (
    <div className="max-w-xl py-4 flex flex-col gap-8">
      <p>{replies.length} Replies</p>
      {replies.map((comment) => (
        <Card className="pt-6" key={comment._id}>
          <CardContent>
            <DisplayUsernamePublishedTime
              username={comment.author.username}
              createdAt={comment.createdAt}
              updatedAt={comment.updatedAt}
            />
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <p>{comment.likes}</p>
                  <LikeIcon />
                </div>
              </div>
              {user?._id === comment.author._id && (
                <DeleteCommentPopup
                  handleDelete={() =>
                    handleDeleteComment(comment._id, comment.parentCommentId)
                  }
                />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Replies;
