"use client";

import { useToast } from "@/hooks/use-toast";
import { createComment } from "@/services/globalApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddComment from "./AddComment";

const CommentForm = ({ discussionId }) => {
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
        setError("Please login to add a comment");
        setLoading(false);
        router.push("/login");
      }

      const payload = {
        description,
        authorId: user._id,
        discussionId,
      };

      const res = await createComment(payload, token);

      if (res.status === 201) {
        toast({
          title: "Comment added successfully!",
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  return (
    <AddComment
      descriptionPlaceholder="Any thoughts on this?"
      label="Comment"
      error={error}
      handleAddComment={handleSubmit}
      loading={loading}
      buttonTitle="Add Comment"
      description={description}
      handleDescriptionChange={(e) => setDescription(e.target.value)}
    />
  );
};

export default CommentForm;
