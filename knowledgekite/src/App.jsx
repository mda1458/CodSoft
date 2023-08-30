import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Main/Dashboard";
import AuthProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./components/Main/Page";
import Content from "./components/Main/Content";
import NoPage from "./components/NoPage";

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
          <Route path="/:name" element={<Page />} />
          <Route path="/:name/:slug" element={<Content />} />
          <Route path="*" element={<NoPage/>} />
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
};

export default App;
