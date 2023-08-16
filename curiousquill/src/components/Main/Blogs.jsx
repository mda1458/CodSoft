import { Link, useParams } from "react-router-dom";
import { firestore } from "../../firebase";
import { useEffect, useState } from "react";

const Blogs = () => {
  const { slug } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firestore;
      console.log(slug);
      const data = await db
        .collection("blogs")
        .where("type", "==", slug)
        .orderBy("createdAt")
        .get().catch((err) => console.log(err));

      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log(data);
    fetchData();
  }, []);

  return (
    <section className="lg:mx-20 pt-20">
      <h1 className="text-3xl font-bold text-center">{slug.toUpperCase()}</h1>
      <div className="flex items-center justify-center flex-wrap mt-10">
        {data.map((blog) => (
          <div className="w-1/3 p-4" key={blog.id}>
            <div className="bg-white shadow-lg rounded-lg px-4 py-6">
              <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
              <p className="mt-2 text-gray-600">
                {blog.desc.slice(0, 200) + "..."}
              </p>
              <div className="flex items-center justify-between mt-4">
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
