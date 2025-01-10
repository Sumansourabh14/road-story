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
import { useToast } from "@/hooks/use-toast";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { roadIncidents } from "@/utils/content/roadSafetyTerms";
import { useRouter } from "next/navigation";

export default function UploadVideoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [incidentType, setIncidentType] = useState([]);
  const { toast } = useToast();
  const router = useRouter();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type.startsWith("video/")) {
      if (selectedFile.size < 50331648) {
        setVideoFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile));
      } else {
        toast({
          variant: "destructive",
          title: "File size exceeded 48 MB",
          description: "Please choose a file of size less than 48 MB",
        });
      }
    } else {
      toast({
        variant: "destructive",
        description: "Please select a valid video file.",
      });
    }
  };

  const handleRemoveVideo = () => {
    setVideoFile(null);
    setPreviewUrl(null);
  };

  const uploadVideo = async (file) => {
    if (!file) {
      toast({
        variant: "destructive",
        description: "No file selected",
      });
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
      toast({
        variant: "destructive",
        title: "Video could not be uploaded",
        description: error.message,
      });
      return error;
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
          location,
          incidentType,
          uploadedBy: undefined,
          uploadedByGuest: true,
        };

        const response = await uploadVideoDetails(payload);

        if (!!response) {
          toast({
            title: "Video uploaded successfully!",
            description: "The video will be visible to all users.",
          });
          router.push("/videos");
        }
      } else {
        toast({
          variant: "destructive",
          title: "Video could not be uploaded",
          description: res?.message,
        });
      }
    } catch (error) {
      setLoading(true);
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Video details could not be uploaded. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="What do you want to name this event?"
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
            placeholder="Any additional info describing the event..."
            className="w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
          />
        </div>
        <VideoUploader
          videoFile={videoFile}
          handleFileChange={handleFileChange}
          handleRemoveVideo={handleRemoveVideo}
          previewUrl={previewUrl}
        />
        {!!videoFile && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium mb-1"
              >
                Location
              </label>
              <Input
                id="location"
                name="location"
                type="text"
                placeholder="Where did this event occur?"
                className="w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Type of incident
              </label>
              <p className="text-sm text-muted-foreground my-2">
                You can select more than one
              </p>
              <ToggleGroup
                variant="outline"
                type="multiple"
                className="flex flex-wrap"
                value={incidentType}
                onValueChange={(value) => {
                  setIncidentType(value);
                }}
              >
                {roadIncidents.map((type) => (
                  <ToggleGroupItem key={type.value} value={type.value}>
                    {type.title}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
        )}
        <Button
          type="submit"
          className="w-full"
          disabled={!videoFile || !title}
        >
          {loading && <Loader2 className="animate-spin" />}
          Submit
        </Button>
      </form>
      {loading && (
        <p className="py-8 text-center">
          Saving the details... Don't close this page.
        </p>
      )}
    </div>
  );
}
