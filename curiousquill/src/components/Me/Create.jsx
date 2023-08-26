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
    <div className="lg:mx-20 pt-20 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center">Share Your Thoughts</h1>
      <div className="w-full md:w-1/2 flex justify-between">
        <input
          type="text"
          className="w-1/3 my-4 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
          placeholder="Title"
        />
        <div className="w-1/3 my-4 p-2 border-2 border-gray-300 rounded-md">
          <select className="w-full bg-transparent outline-none focus:border-yellow-500">
            <option value="technology">Technology</option>
            <option value="science">Science</option>
            <option value="business">Business</option>
            <option value="culture">Culture</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center">Write</h1>
        <div className="w-full">
          {/* image option */}
          <Editor
            apiKey={apiKey}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              table_background_color: "transparent",
              height: 500,
              menubar: false,
              plugins: ["image", "lists", "emoticons", "preview", "codesample"],
              toolbar:
                "undo redo| blocks | bold italic underline | forecolor backcolor | \
              alignleft aligncenter alignright alignjustify | bullist numlist | \
              blockquote superscript subscript emoticons codesample | \
              outdent indent | removeformat | image preview",
            }}
          />
        </div>
        <button
          className="bg-green-700 text-white px-4 py-2 rounded-md my-4 hover:scale-105"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Create;
