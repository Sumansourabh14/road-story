"use client";

import { useToast } from "@/hooks/use-toast";
import useFetchCommentsByDiscussionId from "@/hooks/useFetchCommentsByDiscussionId";
import { removeComment } from "@/services/globalApi";
import { useSelector } from "react-redux";
import DeleteCommentPopup from "../popups/DeleteCommentPopup";
import { Card, CardContent } from "../ui/card";

const Comments = ({ discussionId }) => {
  const { comments, commentsLoading } =
    useFetchCommentsByDiscussionId(discussionId);
  const { toast } = useToast();
  const { user, token } = useSelector((state) => state.auth);

  const handleDeleteComment = async (commentId) => {
    const res = await removeComment(commentId, discussionId, token);

    if (res.status === 200) {
      toast({
        title: "Comment removed successfully!",
      });
    }
  };

  if (commentsLoading) return <p>Loading comments...</p>;

  if (comments.length === 0) {
    return <p>0 Comments</p>;
  }

  return (
    <div className="max-w-xl py-4 flex flex-col gap-8">
      <p>{comments.length} Comments</p>
      {comments.map((comment) => (
        <Card className="pt-6" key={comment._id}>
          <CardContent>
            <p className="text-sm font-light mb-4">{comment.author.username}</p>
            <p className="mb-2">{comment.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span>{comment.likes} likes</span>
              {user._id === comment.author._id && (
                <DeleteCommentPopup
                  handleDelete={() => handleDeleteComment(comment._id)}
                />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Comments;
