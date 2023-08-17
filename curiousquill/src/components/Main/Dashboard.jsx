import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { GiScrollQuill } from "react-icons/gi";
import { FaMicroblog } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <section className="lg:mx-20 pt-20">
      <h1 className="text-xl lg:text-3xl font-bold text-center">
        Welcome {user.displayName}!
      </h1>
      <div className="flex items-center justify-center flex-wrap mt-10">
        <Link to="/blog/create" className="p-4 md:w-1/4">
          <div className="bg-green-700 shadow-lg rounded-3xl px-4 py-6 hover:scale-110">
            <h2 className="text-lg font-bold text-white text-center">
              Write a blog
            </h2>
            <GiScrollQuill className="text-white text-6xl mx-auto" />
          </div>
        </Link>
        <Link to="/my-blogs" className="p-4 md:w-1/4">
          <div className="bg-yellow-600 shadow-lg rounded-3xl px-4 py-6 hover:scale-110">
            <h2 className="text-lg font-bold text-white text-center">
              My Blogs
            </h2>
            <FaMicroblog className="text-white text-6xl mx-auto" />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Dashboard