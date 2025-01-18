"use client";

import { useToast } from "@/hooks/use-toast";
import { addImages, clearImages } from "@/redux/slices/imageUpload";
import { getImageFileUrl } from "@/utils/supabase/getFileUrl";
import { uploadImageFile } from "@/utils/supabase/uploadFile";
import { CircleX, Share } from "lucide-react";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";

const ImageUploader = ({ editor }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { toast } = useToast();
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const uploadImage = async () => {
    setUploading(true);
    if (!files) {
      toast({
        variant: "destructive",
        description: "No files selected",
      });
      return;
    }

    const uploaded = [];

    try {
      for (let file of files) {
        if (!file) {
          toast({
            variant: "destructive",
            description: "No file selected",
          });
          return;
        }

        const fileExtension = file.name.split(".").pop();
        const fileName = `${uuidv4()}.${fileExtension}`;

        const response = await uploadImageFile(file, fileName);

        if (response.statusCode === "403") {
          toast({
            variant: "destructive",
            title: "Image could not be uploaded",
          });
        }

        if (!!response.id) {
          const fileUrl = getImageFileUrl(response.path);
          if (!!fileUrl) {
            uploaded.push(fileUrl);
          }
        }
      }

      setUploadedFiles(uploaded);
    } catch (error) {
      setUploading(false);
      toast({
        variant: "destructive",
        title: "Image could not be uploaded",
        description: error.message,
      });
      return error;
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    if (files.length > 0) {
      uploadImage();
    } else {
      dispatch(clearImages());
    }
  }, [files]);

  const insertImagesToTiptap = (editor, imageUrls) => {
    imageUrls.forEach((url) => {
      editor
        ?.chain()
        .focus()
        .setImage({ src: url }) // `setImage` is the method provided by the Tiptap image extension
        .run();
    });
  };

  useEffect(() => {
    if (uploadedFiles.length > 0 && uploading === false) {
      dispatch(addImages(uploadedFiles));

      insertImagesToTiptap(editor, uploadedFiles);
    }
  }, [uploadedFiles, uploading]);

  return (
    <>
      <FileUploader
        name="file"
        types={["png", "jpg", "jpeg", "webp"]}
        handleChange={handleFileChange}
        multiple
      >
        <div className="w-full py-4">
          <div className="border-2 border-dashed rounded-lg p-8 hover:border-solid transition duration-200 flex flex-col items-center gap-4">
            <div>
              <Share />
            </div>
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <p className="text-sm">
                Drag & drop your files here or click to upload
              </p>
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </FileUploader>
      {files.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Uploaded Images</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="relative group border rounded-md overflow-hidden"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index}`}
                  className={`object-cover w-full h-32 opacity-100 ${
                    uploading && `opacity-50 animate-pulse`
                  }`}
                />
                {uploading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 text-white text-md font-semibold">
                    Uploading...
                  </div>
                )}
                <Button
                  type="button"
                  title="Remove image"
                  onClick={() => handleRemoveFile(index)}
                  className="absolute top-2 right-2 p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <CircleX />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageUploader;
