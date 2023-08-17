import { Link, useParams } from "react-router-dom";
import { firestore } from "../../../firebase";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { useAuth } from "../../../context/AuthContext";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (slug === "my-blogs"){
      setLoading(true);
      const fetchData = async () => {
        const db = firestore;
        const data = await db.collection("blogs")
        .where("user", "==", user.uid)
        .get();
        setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      fetchData().then(() => setLoading(false));
      return;
    }
    else {
      setLoading(true);
      const fetchData = async () => {
        const db = firestore;
        const data = await db.collection("blogs").
        where("type", "==", slug).
        get();
        setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      fetchData().then(() => setLoading(false));
    }
  }, [slug]);

  return (
    <section className="lg:mx-20 pt-20">
      <h1 className="text-3xl font-bold text-center">{slug.toUpperCase()}</h1>
      <div className="flex items-center justify-center flex-wrap mt-10">
        {loading? <Loader />
        : data.map((blog) => (
          // <div className="w-[30%] p-4" key={blog.id}>
          //   <img src={blog.img} alt="" className="w-20"/>
          //   <div className="shadow-lg rounded-lg px-4 py-6">
          //     <h2 className="text-lg font-bold text-gray-800">{blog.title}</h2>
          //     <p className="mt-2 text-gray-600">
          //       {blog.desc.slice(0, 200) + "..."}
          //     </p>
          //     <div className="flex items-center justify-between mt-4">
          //       <Link
          //         to={`/blog/${blog.id}`}
          //         className="text-blue-500 hover:underline"
          //       >
          //         Read more
          //       </Link>
          //     </div>
          //   </div>
          // </div>
          <BlogCard blog={blog} key={blog.id}/>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
