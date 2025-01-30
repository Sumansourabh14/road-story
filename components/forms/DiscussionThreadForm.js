"use client";
import { useToast } from "@/hooks/use-toast";
import { createDiscussionThread } from "@/services/globalApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import DiscussionFormTemplate from "./DiscussionFormTemplate";

const DiscussionThreadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, token } = useSelector((state) => state.auth);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Please login to create a new discussion thread");
    }

    setLoading(true);

    const payload = {
      title,
      description,
      authorId: user._id,
    };

    const res = await createDiscussionThread(payload, token);

    if (res.status === 201) {
      toast({
        title: "Discussion created successfully!",
        description:
          "Go to the discussions page to view all discussion threads.",
      });
      router.push(`/discussions/${res.data.data._id}`);
    }
    setLoading(false);

    // Clear the form
    setTitle("");
    setDescription("");
  };

  return (
    <DiscussionFormTemplate
      submitButtonTitle={"Create Discussion"}
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

export default DiscussionThreadForm;
