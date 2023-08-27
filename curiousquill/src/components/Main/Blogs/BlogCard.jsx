import { Link, useNavigate } from "react-router-dom"
import "./blogCard.css"
import { RiEditCircleFill, RiDeleteBin5Fill } from "react-icons/ri"
import { firestore } from "../../../firebase"
import { useState } from "react"
import { toast } from "react-toastify"
import avatar from "../../../assets/avatar.png"

const BlogCard = ({blog, my}) => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const handleDelete = () => {
    const db = firestore;
    db.collection("blogs").doc(blog.id).delete().then(() => {
      toast.success("Blog deleted successfully")
      setShow(false)
      navigate("/dashboard")
    }).catch((error) => {
      toast.error("Error removing document: ", error)
    });
  }
  return (
    <article className="card w-[90vw] md:w-[30%]" key={blog.id}>
      <Link to={`/blog/${blog.id}`}>
        <header className="card__thumb">
          <img src={blog.img} />
        </header>
        <div className="card__body">
          <div className="author flex items-center justify-between w-full pt-2 rounded-t-lg">
            <img
              src={blog.user.photoURL || avatar}
              alt=""
              className="w-10 h-10 mb-2 rounded-full"
            />
            <div className="author__name">
              by <span className="text-yellow-500 font-bold underline underline-offset-4">{blog.user.displayName.slice(0,15)}</span>{" "}
            </div>
            <div className="author__date">
              on{" "}
              <span className="text-yellow-500 font-bold underline underline-offset-4">
                {new Date(blog.createdAt?.seconds * 1000).toDateString()}
              </span>
            </div>
          </div>
          <div className="card__title">{blog.title}</div>
          <p className="card__description">{blog.desc.slice(0, 200) + "..."}</p>
        </div>
      </Link>
      {my && (
        <div className="flex justify-around pb-4">
          <Link to={`/blog/edit/${blog.id}`}>
            <RiEditCircleFill className="text-xl hover:text-orange-500 hover:scale-105" />
          </Link>
          <button onClick={() => setShow(true)}>
            <RiDeleteBin5Fill className="text-xl hover:text-orange-500 hover:scale-105" />
          </button>
        </div>
      )}
      {show && (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-16 rounded-md">
            <h1 className="text-xl font-bold">Are you sure?</h1>
            <div className="flex justify-around">
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md my-4 hover:scale-105"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md my-4 hover:scale-105"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default BlogCard