import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const VideoUploader = ({
  videoFile,
  handleFileChange,
  previewUrl,
  handleRemoveVideo,
}) => {
  return (
    <Card className="w-[100%] mx-auto mt-10 shadow-lg rounded-md">
      <CardHeader>
        <section className="flex flex-row items-center justify-between">
          <label className="text-sm">Upload Your Video</label>
          {!!videoFile && (
            <Button
              onClick={handleRemoveVideo}
              variant="icon"
              className="p-2 rounded-md focus:outline-none focus:ring-2 hover:scale-125"
              aria-label="Close"
              title="Remove video"
            >
              <X className="h-12 w-12 text-gray-600 dark:text-gray-300" />
            </Button>
          )}
        </section>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {!videoFile && (
            <label
              htmlFor="file-input"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium border border-gray-500 rounded-lg cursor-pointer hover:border-dotted focus:outline-none focus:ring-offset-2"
            >
              Choose Video
            </label>
          )}
          <input
            id="file-input"
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {videoFile && (
            <div>
              <p className="text-sm text-gray-500">
                File Name: {videoFile.name}
              </p>
              {previewUrl && (
                <video
                  controls
                  src={previewUrl}
                  className="mt-4 rounded-lg w-full max-h-64"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoUploader;
