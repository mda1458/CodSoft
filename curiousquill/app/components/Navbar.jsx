import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  console.count("Navbar")
  return (
    <div
      className="h-20 bg-[rgba(255,255,255,0.18)] shadow-sm backdrop-blur-sm fixed w-full"
    >
      <div className="flex justify-between items-center px-4 py-2 z-10">
        <Link to="/dashboard">
          <img src={logo} alt="" className="h-16" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar