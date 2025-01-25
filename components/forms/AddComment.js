import LoadingButton from "../buttons/LoadingButton";
import { Textarea } from "../ui/textarea";

const AddComment = ({
  handleAddComment,
  error,
  label,
  descriptionPlaceholder,
  description,
  handleDescriptionChange,
  loading,
  buttonTitle,
}) => {
  return (
    <form onSubmit={handleAddComment} className="max-w-xl py-8 space-y-4">
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          {label}
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder={descriptionPlaceholder}
          className="mt-1"
          rows={4}
        />
      </div>

      <LoadingButton
        loading={loading}
        isDisabled={!description}
        title={buttonTitle}
      />
    </form>
  );
};

export default AddComment;
