import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Dashboard = () => {
  return (
    <>
      <div className="text-yellow-500 text-xl pt-20">I am Dashboard Landing</div>
      <Link to="/blog/hello">Hello</Link>
      <Link to="/blog/world">World</Link>
      <button onClick={()=>auth.
        signOut()}
      >Signout</button>
    </>
  );
}

export default Dashboard