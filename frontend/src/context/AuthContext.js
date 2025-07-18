import { createContext, useContext, useState, useEffect } from "react";
import { formatUser } from "../components/utils/formatUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const loginWithGoogle = (googleData) => {
    const user = formatUser("google", googleData);
    login(user);
  };

  const loginWithPhone = () => {
    const user = formatUser("phone");
    login(user);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loginWithGoogle, loginWithPhone }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);