import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { firestore } from "../../firebase";
import Loader from "../Loader/Loader";
import { Parser } from "html-to-react"
import avatar from "../../assets/avatar.png";

const BlogPage = () => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState({})
    const {slug} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const db = firestore;
            const data = await db.collection("blogs").
            doc(slug).
            get();
            setBlog(data.data())
            setLoading(false)
        }
        fetchData()
    }, [slug, blog.title])



  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="lg:mx-20 pt-20">
          <h1 className="text-2xl font-bold text-center">{blog.title}</h1>
          <div className="flex justify-center items-center my-5">
            <div className="flex rounded-3xl justify-center items-center p-2 bg-white">
              <img
                src={blog.user.photoURL || avatar}
                alt={blog.user.displayName}
                className="w-10 h-10 rounded-full"
              />
              <p className="ml-2">{blog.user.displayName}</p>
            </div>
          </div>
          <img
            src={blog.img}
            alt={blog.title}
            className="fixed top-20 left-0 -z-10 w-screen blur-md opacity-60"
          />
          <div className="mt-5 mb-10 text-justify">
            {new Parser().parse(blog.content)}
          </div>
        </section>
      )}
    </>
  );
}

export default BlogPage