import { Button } from "../ui/button";

const ToolButton = ({ onClick, children, active }) => {
  return (
    <Button
      onClick={onClick}
      className={`p-2 ${
        active ? `bg-black text-white` : `bg-white text-black`
      }`}
    >
      {children}
    </Button>
  );
};

export default ToolButton;
