import { CircleX } from "lucide-react";
import { Button } from "../ui/button";

const EditDiscussionCancelButton = ({ handleClick }) => {
  return (
    <Button onClick={handleClick} variant="destructive">
      <CircleX /> Cancel Edit
    </Button>
  );
};

export default EditDiscussionCancelButton;
