import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const DeleteDiscussionPopup = ({ deleteDiscussion }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" title="Delete discussion">
          <Trash2 className="text-red-600" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete this discussion?</DialogTitle>
          <DialogDescription>You can't undo this.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={deleteDiscussion} variant="destructive">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDiscussionPopup;
