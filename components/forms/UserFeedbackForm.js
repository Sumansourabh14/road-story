"use client";
import { createUserFeedback } from "@/services/globalApi";
import { useState } from "react";
import LoadingButton from "../buttons/LoadingButton";
import TipTapDescription from "./TipTapDescription";
import { useToast } from "@/hooks/use-toast";

const UserFeedbackForm = () => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await createUserFeedback(description);

    if (res.status === 201) {
      toast({
        title: "Thank you so much for sharing your valuable feedback!",
      });
    }
    setLoading(false);

    // Clear the form
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 rounded-lg shadow-md space-y-4"
    >
      <TipTapDescription
        description={description}
        handleDescriptionChange={setDescription}
        placeholder={"How can be make this site better?"}
      />
      <LoadingButton
        loading={loading}
        isDisabled={!description}
        title="Send feedback"
      />
    </form>
  );
};

export default UserFeedbackForm;
