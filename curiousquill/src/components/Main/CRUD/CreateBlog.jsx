import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const CreateBlog = () => {
    const editorRef = useRef(null);
    const handleCreate = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }

  return (
    <div className="lg:mx-20 pt-20">
        <h1 className="text-3xl font-bold text-center">Share Your Thoughts</h1>
        <div className="flex items-center justify-center flex-wrap mt-10 z-0">
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
            />
        </div>
        <button onClick={handleCreate}>Create</button>
    </div>
  )
}

export default CreateBlog