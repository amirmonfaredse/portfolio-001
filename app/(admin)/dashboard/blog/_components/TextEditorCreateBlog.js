"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function TextEditorCreateBlog({ formState }) {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = useMemo(
    () => ({
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
    }),
    []
  );

  const handleChange = (value) => {
    setContent(value);
  };
  useEffect(() => {
    if (formState?.status === "success") setContent("");
  }, [formState]);
  return (
    <div className="w-[95%] md:w-full h-fit flex items-center justify-center">
      <div className="w-full h-fit">
        <JoditEditor
          ref={editor}
          name="textEditor"
          config={config}
          onBlur={handleChange}
          value={content}
          className="w-full h-[70%] mt-10 bg-white"
        />
        <style>{`.jodit-wysiwyg{height:300px !important}`}</style>
      </div>
    </div>
  );
}
