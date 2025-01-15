import DeletePopup from "./DeletePopup";

const DeleteCommentPopup = ({ handleDelete }) => {
  return (
    <DeletePopup
      buttonTitle="Delete comment"
      handleDelete={handleDelete}
      title="Delete this comment?"
    />
  );
};

export default DeleteCommentPopup;
