import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Create = () => {
  const apiKey = import.meta.env.VITE_TINY_API_KEY;
  const editorRef = useRef(null);
  const handleCreate = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="lg:mx-20 pt-20">
      <h1 className="text-3xl font-bold text-center">Share Your Thoughts</h1>
      <div className="w-full flex-grow">
        {/* image option */}
        <Editor
          apiKey={apiKey}
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            table_background_color: "transparent",
            height: 500,
            menubar: false,
            plugins: ["image", "lists", "emoticons", "preview", "code"],
            toolbar:
              "undo redo| blocks | bold italic underline | forecolor backcolor | \
            alignleft aligncenter alignright alignjustify | bullist numlist | \
            blockquote superscript subscript emoticons code | \
            outdent indent | removeformat | image preview",
          }}
        />
      </div>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default Create;
