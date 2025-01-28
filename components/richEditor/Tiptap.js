"use client";

import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import { useSelector } from "react-redux";
import TextAlign from "@tiptap/extension-text-align";

const Tiptap = ({ content, onChange, placeholder }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      OrderedList,
      ListItem,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image.configure({
        inline: false, // Use block images
        HTMLAttributes: {
          class: "max-w-[500px] mx-auto",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const { images } = useSelector((state) => state.images);

  return (
    <div className="flex flex-col space-y-4">
      <Toolbar editor={editor} images={images} />
      <EditorContent
        editor={editor}
        className="border border-gray-300 rounded-md p-2 focus:outline-none"
      />
    </div>
  );
};

export default Tiptap;
