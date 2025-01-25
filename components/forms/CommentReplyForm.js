"use client";

import { useToast } from "@/hooks/use-toast";
import { createCommentReply } from "@/services/globalApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddComment from "./AddComment";

const CommentReplyForm = ({ discussionId, parentCommentId }) => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, token } = useSelector((state) => state.auth);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      if (!user) {
        setError("Please login to add a comment reply");
        setLoading(false);
        router.push("/login");
      }

      const payload = {
        parentCommentId,
        description,
        authorId: user._id,
        discussionId,
      };

      const res = await createCommentReply(payload, token);

      if (res.status === 201) {
        toast({
          title: "Comment reply added successfully!",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  return (
    <AddComment
      label="Reply"
      descriptionPlaceholder="Share your thoughts..."
      error={error}
      handleAddComment={handleSubmit}
      loading={loading}
      buttonTitle="Add Reply"
      description={description}
      handleDescriptionChange={(e) => setDescription(e.target.value)}
    />
  );
};

export default CommentReplyForm;
