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
        <label className="text-sm">Upload Your Video</label>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {!videoFile && (
            <label
              htmlFor="file-input"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
              <Button
                onClick={handleRemoveVideo}
                variant="secondary"
                className="mt-2"
              >
                Remove Video
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoUploader;
