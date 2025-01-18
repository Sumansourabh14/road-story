import { ImagePlus } from "lucide-react";
import ImageUploader from "../richEditor/ImageUploader";
import ToolButton from "../richEditor/ToolButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const UploadImagePopup = ({ editor, onClick }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ToolButton
          active={editor?.isActive("image")}
          onClick={onClick}
          title="upload image"
        >
          <ImagePlus className="h-4 w-4" />
        </ToolButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
          <DialogDescription></DialogDescription>
          <ImageUploader editor={editor} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadImagePopup;
