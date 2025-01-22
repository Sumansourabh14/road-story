import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Highlighter,
  ImagePlus,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  Underline,
} from "lucide-react";
import ToolButton from "./ToolButton";
import UploadImagePopup from "../popups/UploadImagePopup";

const tools = [
  {
    task: "bold",
    icon: <Bold className="h-4 w-4" />,
  },
  {
    task: "italic",
    icon: <Italic className="h-4 w-4" />,
  },
  {
    task: "strike",
    icon: <Strikethrough className="h-4 w-4" />,
  },
  {
    task: "underline",
    icon: <Underline className="h-4 w-4" />,
  },
  {
    task: "left",
    icon: <AlignLeft className="h-4 w-4" />,
  },
  {
    task: "center",
    icon: <AlignCenter className="h-4 w-4" />,
  },
  {
    task: "right",
    icon: <AlignRight className="h-4 w-4" />,
  },
  //   {
  //     task: "bulletList",
  //     icon: <List className="h-4 w-4" />,
  //   },
  //   {
  //     task: "orderedList",
  //     icon: <ListOrdered className="h-4 w-4" />,
  //   },
  {
    task: "highlight",
    icon: <Highlighter className="h-4 w-4" />,
  },
];

const chainMethods = (editor, command) => {
  if (!editor) return;

  command(editor.chain().focus()).run();
};

const Toolbar = ({ editor }) => {
  const handleActiveClick = (task) => {
    switch (task) {
      case "bold":
        return chainMethods(editor, (chain) => chain.toggleBold());
      case "italic":
        return chainMethods(editor, (chain) => chain.toggleItalic());
      case "underline":
        return chainMethods(editor, (chain) => chain.toggleUnderline());
      case "strike":
        return chainMethods(editor, (chain) => chain.toggleStrike());
      case "highlight":
        return chainMethods(editor, (chain) => chain.toggleHighlight());
      case "bulletList":
        return chainMethods(editor, (chain) => chain.toggleBulletList());
      case "orderedList":
        return chainMethods(editor, (chain) => chain.toggleOrderedList());
      case "left":
        return chainMethods(editor, (chain) => chain.setTextAlign("left"));
      case "center":
        return chainMethods(editor, (chain) => chain.setTextAlign("center"));
      case "right":
        return chainMethods(editor, (chain) => chain.setTextAlign("right"));
    }
  };

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {tools.map((tool) => (
        <ToolButton
          key={tool.task}
          active={
            editor?.isActive(tool.task) ||
            editor?.isActive({ textAlign: tool.task })
          }
          onClick={() => handleActiveClick(tool.task)}
        >
          {tool.icon}
        </ToolButton>
      ))}
      <UploadImagePopup
        editor={editor}
        handleActiveClick={() => handleActiveClick("image")}
      />
    </div>
  );
};

export default Toolbar;
