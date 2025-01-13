"use client";

import { createComment } from "@/services/globalApi";
import { useState } from "react";
import LoadingButton from "../buttons/LoadingButton";
import { Textarea } from "../ui/textarea";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

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

      if (res.status === 200) {
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
    <form onSubmit={handleSubmit} className="max-w-xl py-8 space-y-4">
      <hr />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Comment
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Any thoughts on this?"
          className="mt-1"
          rows={4}
        />
      </div>

      <LoadingButton
        loading={loading}
        isDisabled={!description}
        title="Add Comment"
      />
    </form>
  );
};

export default CommentForm;
