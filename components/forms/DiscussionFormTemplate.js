import LoadingButton from "../buttons/LoadingButton";
import Tiptap from "../richEditor/Tiptap";
import { Input } from "../ui/input";

const DiscussionFormTemplate = ({
  submitButtonTitle,
  loading,
  handleSubmit,
  error,
  title,
  handleTitleChange,
  description,
  handleDescriptionChange,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 rounded-lg shadow-md space-y-4"
    >
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title <span className="text-red-500">*</span>
        </label>
        <Input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter a title"
          className="mt-1"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <div className="mt-2">
          <Tiptap content={description} onChange={handleDescriptionChange} />
        </div>
      </div>

      <LoadingButton
        loading={loading}
        isDisabled={!title}
        title={submitButtonTitle}
      />
    </form>
  );
};

export default DiscussionFormTemplate;
