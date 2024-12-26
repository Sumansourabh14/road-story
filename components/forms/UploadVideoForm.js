"use client";
import { uploadVideoDetails } from "@/services/globalApi";
import { getFileUrl } from "@/utils/supabase/getFileUrl";
import { uploadFile } from "@/utils/supabase/uploadFile";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import VideoUploader from "./VideoUploader";

export default function UploadVideoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setVideoFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      alert("Please select a valid video file.");
    }
  };

  const handleRemoveVideo = () => {
    setVideoFile(null);
    setPreviewUrl(null);
  };

  const uploadVideo = async (file) => {
    if (!file) {
      console.log("No file selected");
      return;
    }

    const fileExtension = file.name.split(".").pop();
    const fileName = `${uuidv4()}.${fileExtension}`;

    try {
      setLoading(true);
      const response = await uploadFile(file, fileName);
      return response;
    } catch (error) {
      setLoading(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await uploadVideo(videoFile);
      if (!!res.id) {
        const fileUrl = getFileUrl(res.path);

        const payload = {
          title,
          description,
          videoUrl: fileUrl,
          uploadedBy: undefined,
          uploadedByGuest: true,
        };

        const response = await uploadVideoDetails(payload);
        console.log(response);
      }
    } catch (error) {
      setLoading(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Upload Video</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Enter the title"
            className="w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-1"
          >
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter the description"
            className="w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <VideoUploader
          videoFile={videoFile}
          handleFileChange={handleFileChange}
          handleRemoveVideo={handleRemoveVideo}
          previewUrl={previewUrl}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={!videoFile || !title}
        >
          {loading && <Loader2 className="animate-spin" />}
          Submit
        </Button>
      </form>
    </div>
  );
}
