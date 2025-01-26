import { Pencil } from "lucide-react";
import { Button } from "../ui/button";

const EditDiscussionButton = ({ handleDiscussionEditClick }) => {
  return (
    <Button onClick={handleDiscussionEditClick}>
      <Pencil /> Edit
    </Button>
  );
};

export default EditDiscussionButton;
