import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthProvider from "./context/AuthContext"
import Auth from "./components/Auth"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<div>Hello</div>} />
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
  )
}

export default App