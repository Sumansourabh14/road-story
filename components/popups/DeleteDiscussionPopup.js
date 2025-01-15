import DeletePopup from "./DeletePopup";

const DeleteDiscussionPopup = ({ deleteDiscussion }) => {
  return (
    <DeletePopup
      buttonTitle="Delete discussion"
      handleDelete={deleteDiscussion}
      title="Delete this discussion?"
    />
  );
};

export default DeleteDiscussionPopup;
