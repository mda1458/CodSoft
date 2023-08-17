import { useParams } from "react-router-dom";
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
          <BlogCard blog={blog} key={blog.id}/>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
