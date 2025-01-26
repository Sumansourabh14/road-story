"use client";
import { useToast } from "@/hooks/use-toast";
import { updateDiscussionThread } from "@/services/globalApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import DiscussionFormTemplate from "./DiscussionFormTemplate";

const EditDiscussionThreadForm = ({ id, currentTitle, currentDescription }) => {
  const [title, setTitle] = useState(currentTitle);
  const [description, setDescription] = useState(currentDescription);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, token } = useSelector((state) => state.auth);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Please login to update this discussion thread");
    }

    setLoading(true);

    const payload = {
      title,
      description,
    };

    const res = await updateDiscussionThread(id, payload, token);

    if (res.status === 200) {
      toast({
        title: "Discussion updated successfully!",
      });
      router.push(`/discussions`);
    }
    setLoading(false);

    // Clear the form
    setTitle("");
    setDescription("");
  };

  return (
    <DiscussionFormTemplate
      submitButtonTitle={"Update Discussion"}
      handleSubmit={handleSubmit}
      title={title}
      handleTitleChange={(e) => setTitle(e.target.value)}
      description={description}
      handleDescriptionChange={setDescription}
      error={error}
      loading={loading}
    />
  );
};

export default EditDiscussionThreadForm;
