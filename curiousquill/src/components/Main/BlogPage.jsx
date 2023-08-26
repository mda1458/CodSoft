import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { firestore } from "../../firebase";
import Loader from "../Loader/Loader";
import { Parser } from "html-to-react"

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
    {
      loading ? <Loader /> : (
    
      <section className="lg:mx-20 pt-20">
        <h1 className="text-2xl font-bold text-center">{blog.title}</h1>
        <img src={blog.img} alt={blog.title} className="fixed top-20 left-0 -z-10 w-screen blur-md opacity-60" />
        <div className="mt-5 mb-10 text-justify">
          {
            new Parser().parse(blog.content)
          }
        </div>
      </section>
    )
    }
  </>
  );
}

export default BlogPage