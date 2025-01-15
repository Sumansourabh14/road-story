"use client";
import { createDiscussionThread } from "@/services/globalApi";
import { useState } from "react";
import { useSelector } from "react-redux";
import LoadingButton from "../buttons/LoadingButton";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

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
      setError("Please login to create a new dicussion thread");
    }

    setLoading(true);

    const payload = {
      title,
      description,
      authorId: user._id,
    };

    const res = await createDiscussionThread(payload, token);

    if (res.status === 200) {
      toast({
        title: "Discussion created successfully!",
        description:
          "Go to the discussions page to view all discussion threads.",
      });
      router.push("/discussions");
    }
    setLoading(false);

    // Clear the form
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 rounded-lg shadow-md space-y-4"
    >
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title <span className="text-red-500">*</span>
        </label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title"
          className="mt-1"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description (optional)"
          className="mt-1"
          rows={4}
        />
      </div>

      <LoadingButton
        loading={loading}
        isDisabled={!title}
        title="Create Discussion"
      />
    </form>
  );
};

export default DiscussionThreadForm;
