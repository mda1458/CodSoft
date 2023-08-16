import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        if (window.location.pathname === "/") {
          navigate("/dashboard");
        }
      } else {
        navigate("/");
      }
    });

    return unsubscribe;
  }, [navigate]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}  
    </AuthContext.Provider>
  );
};

export default AuthProvider;
