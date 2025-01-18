"use client";

import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      OrderedList,
      ListItem,
      Placeholder.configure({
        placeholder: "Enter a description...",
      }),
    ],
    content: content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col space-y-4">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
