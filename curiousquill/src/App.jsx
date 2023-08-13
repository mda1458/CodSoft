import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "./components/Auth"
import AuthProvider from "./context/AuthContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BlogPage from "./components/Main/BlogPage"
import Dashboard from "./components/Main/Dashboard"


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
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