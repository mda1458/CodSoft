import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <section className="lg:mx-20 pt-20">
      <h1 className="text-3xl font-bold text-center">Welcome {user.displayName}!</h1>
      {/* Big Create button */}
      <div className="flex items-center justify-center flex-wrap mt-10">
        <Link to="/create" className="w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg px-4 py-6">
            <h2 className="text-xl font-bold text-gray-800">Create a new blog</h2>
            <p className="mt-2 text-gray-600">
              Create a new blog and share your thoughts with the world!
            </p>
            <div className="flex items-center justify-between mt-4">
              <Link
                to="/create"
                className="text-blue-500 hover:underline"
              >
                Create
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Dashboard