import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { firebaseTimestamp, firestore } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import ButtonLoader from "../Loader/ButtonLoader";

const Create = () => {
  const [loading, setLoading] = useState(false)
  const { user } = useAuth();
  const apiKey = import.meta.env.VITE_TINY_API_KEY;
  const title = useRef(null);
  const type = useRef(null);
  const img = useRef(null);
  const desc = useRef(null);
  const editorRef = useRef(null);
  const handleCreate = () => {
    if(!title.current.value || !editorRef.current.getContent() || !img.current.value || !type.current.value || !desc.current.value){
      toast.error("Please fill all the fields")
      return
    }
    setLoading(true)
    const db = firestore;
    const data = {
      title: title.current.value,
      type: type.current.value,
      content: editorRef.current.getContent(),
      createdAt: firebaseTimestamp(),
      user: {
        id: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      img: img.current.value,
      desc: desc.current.value,
    };

    db.collection("blogs").doc().set(data).then(() => {
      toast.success("Blog Created Successfully")
      title.current.value = "";
      editorRef.current.setContent("");
      img.current.value = "";
      type.current.value = "";
      desc.current.value = "";
      setLoading(false)
    })
    .catch((error) => {
      toast.error("Error adding document: ", error);
      setLoading(false)
    });
    
  };

  return (
    <div className="lg:mx-20 pt-20 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center">Share Your Thoughts</h1>
      <div className="w-[95vw] sm:w-full flex flex-col sm:flex-row justify-between items-center flex-wrap">
        <label>Title</label>
        <input
          type="text"
          ref={title}
          className="sm:w-1/3 my-4 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
          placeholder="Title"
          required
        />
        <label>Image</label>
        <input 
          type="text"
          ref={img}
          placeholder="Image URL"
          className="sm:w-1/5 my-4 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-yellow-500" 
          required
        />
        <label>Type</label>
        <div className="sm:w-1/4 my-4 p-2 border-2 border-gray-300 rounded-md">
          <select ref={type} placeholder="type" className="w-full bg-transparent outline-none focus:border-yellow-500">
            <option value="technology">Technology</option>
            <option value="science">Science</option>
            <option value="business">Business</option>
            <option value="culture">Culture</option>
          </select>
        </div>
        <label >Short Description</label>
        <textarea
          ref={desc}
          className="w-full my-4 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
          placeholder="Short Description"
          required
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center">Write</h1>
        <div className="w-[88vw]">
          <Editor
            apiKey={apiKey}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 500,
              menubar: false,
              plugins: ["lists", "emoticons", "preview", "codesample", "code"],
              toolbar:
                "undo redo| blocks | bold italic underline | forecolor backcolor | \
              alignleft aligncenter alignright alignjustify | bullist numlist | \
              blockquote superscript subscript emoticons codesample | \
              outdent indent | removeformat | preview | code",
            }}
          />
        </div>
        <button
          className="bg-green-700 w-32 text-white px-4 py-2 rounded-md my-4 hover:scale-105"
          onClick={handleCreate}
        >
          {loading?<ButtonLoader/>:"Create"}
        </button>
      </div>
    </div>
  );
};

export default Create;
