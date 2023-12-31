import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "./components/Auth"
import AuthProvider from "./context/AuthContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BlogPage from "./components/Main/BlogPage"
import Dashboard from "./components/Main/Dashboard"
import Navbar from "./components/Navbar"
import Blogs from "./components/Main//Blogs/Blogs"
import Create from "./components/Me/Create"
import Edit from "./components/Me/Edit"


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/:slug" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/blog/create" element={<Create />} />
          <Route path="/blog/edit/:slug" element={<Edit />} />
        </Routes>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
    </BrowserRouter>
  );
}

export default App