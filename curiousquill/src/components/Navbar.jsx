import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const { user } = useAuth();
  const handleLogout = () => {
    setShowMenu(false)
    auth.signOut()
    .then(() => {
      toast.success("Logged out successfully")
      navigate("/")
    })
    .catch((err) => {
      toast.error(err.message)
    }
    )
  }

  window.onclick = (e) => {
    if (e.target.className !== "rounded-full w-12 h-12 cursor-pointer") {
      setShowMenu(false);
    }
  };



  return (
    <div className="h-16 sm:h-20 bg-[rgba(255,255,255,0.18)] shadow-sm backdrop-blur-sm fixed w-full">
      <div className="flex justify-between items-center px-4 py-2 z-10">
        <Link to="/dashboard">
          <img src={logo} alt="" className="h-12 sm:h-16" />
        </Link>
        <div className="hidden md:flex gap-4 w-[50%] md:gap-8">
          <Link
            to="/dashboard"
            className="text-slate-600 hover:text-orange-400 hover:scale-110"
          >
            Dashboard
          </Link>
          <Link
            to="/business"
            className="text-slate-600 hover:text-orange-400 hover:scale-110"
          >
            Business
          </Link>
          <Link
            to="/culture"
            className="text-slate-600 hover:text-orange-400 hover:scale-110"
          >
            Culture
          </Link>
          <Link
            to="/science"
            className="text-slate-600 hover:text-orange-400 hover:scale-110"
          >
            Science
          </Link>
          <Link
            to="/technology"
            className="text-slate-600 hover:text-orange-400 hover:scale-110"
          >
            Technology
          </Link>
        </div>
        {/* Hamburger */}
        <div
          onClick={() => setShowNav(true)}
          className="md:hidden p-2 border border-orange-400 rounded-full"
        >
          <GiHamburgerMenu className="h-4 w-4 text-[#BB3C0B] hover:text-orange-400" />
        </div>
        {showNav && (
          <div className="fixed top-0 right-0 pt-8 flex justify-start items-center gap-36 flex-col w-screen h-screen bg-white backdrop-blur-3xl bg-opacity-95">
            <div
              onClick={() => setShowNav(false)}
              className="md:hidden p-2 border border-orange-400 rounded-full"
            >
              <RxCross1 className="h-4 w-4 text-[#BB3C0B] hover:text-orange-400" />
            </div>
            <div className="flex flex-col items-center justify-center gap-8">
              <Link
                to="/dashboard"
                onClick={() => setShowNav(false)}
                className="px-4 py-2 text-lg text-center hover:bg-orange-400 hover:text-white w-full"
              >
                Dashboard
              </Link>
              <Link
                to="/business"
                onClick={() => setShowNav(false)}
                className="px-4 py-2 text-lg text-center hover:bg-orange-400 hover:text-white w-full"
              >
                Business
              </Link>
              <Link
                to="/culture"
                onClick={() => setShowNav(false)}
                className="px-4 py-2 text-lg text-center hover:bg-orange-400 hover:text-white w-full"
              >
                Culture
              </Link>
              <Link
                to="/science"
                onClick={() => setShowNav(false)}
                className="px-4 py-2 text-lg text-center hover:bg-orange-400 hover:text-white w-full"
              >
                Science
              </Link>
              <Link
                to="/technology"
                onClick={() => setShowNav(false)}
                className="px-4 py-2 text-lg text-center hover:bg-orange-400 hover:text-white w-full"
              >
                Technology
              </Link>
            </div>
          </div>
        )}
        {user && (
          <>
            <img
              className="rounded-full w-12 h-12 cursor-pointer"
              src={user.photoURL ? user.photoURL : avatar}
              alt="avatar"
              onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
              <div className="absolute top-20 right-5 w-64 rounded-md bg-[#ffffffe0] shadow-lg py-2">
                <div className="flex flex-col items-center justify-center">
                  <p className="px-4 py-2 text-sm">{user.displayName}</p>
                  <Link
                    to="/me"
                    className="px-4 py-2 text-lg text-center hover:bg-orange-400 hover:text-white w-full"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-lg hover:bg-orange-400 hover:text-white w-full"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar