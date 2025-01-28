import Tiptap from "../richEditor/Tiptap";

const TipTapDescription = ({
  description,
  handleDescriptionChange,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor="description" className="block text-sm font-medium">
        Description
      </label>
      <div className="mt-2">
        <Tiptap
          content={description}
          onChange={handleDescriptionChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TipTapDescription;
