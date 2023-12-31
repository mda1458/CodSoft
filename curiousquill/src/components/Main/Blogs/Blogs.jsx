import { useParams } from "react-router-dom";
import { firestore } from "../../../firebase";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { useAuth } from "../../../context/AuthContext";
import BlogCard from "./BlogCard";
import { TbMoodSadDizzy } from "react-icons/tb";

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
        .where("user.id", "==", user.uid)
        .get();
        setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      fetchData().then(() => setLoading(false));
      console.log(data);
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
    <section className="pt-20">
      <h1 className="text-3xl font-bold text-center">{slug.toUpperCase()}</h1>
      <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap mt-10 z-0">
        {loading ? (
          <Loader />
        ) : data.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <TbMoodSadDizzy className="text-5xl text-center text-yellow-600" />
            <h1 className="text-2xl text-center">No Quills ✒️ Yet</h1>
          </div>
        ) : (
          data.map((blog) => (
            <BlogCard blog={blog} my={slug === "my-blogs"} key={blog.id} />
          ))
        )}
      </div>
    </section>
  );
};

export default Blogs;
