import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="text-yellow-500 text-xl">I am Dashboard Landing</div>
      <Link to="/blog/hello">Hello</Link>
      <Link to="/blog/world">World</Link>
    </>
  );
}

export default Dashboard