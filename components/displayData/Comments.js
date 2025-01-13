"use client";

import useFetchCommentsByDiscussionId from "@/hooks/useFetchCommentsByDiscussionId";
import { Card, CardContent } from "../ui/card";

const Comments = ({ discussionId }) => {
  const { comments, commentsLoading } =
    useFetchCommentsByDiscussionId(discussionId);

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
            <p className="mb-2">{comment.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-sm font-light">
                {comment.author.username}
              </span>
              <span>{comment.likes} likes</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Comments;
