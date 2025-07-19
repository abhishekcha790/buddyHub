// AuthContext.js
//
// This file manages global authentication state using React Context API.
// It provides login/logout functionality and persists user session via localStorage.
// It also handles login methods like Google and Phone, formatting user objects accordingly.

/*
===================== 🔐 Auth Flow Summary =====================

1. When the app starts, `useEffect` checks localStorage to restore user state.
2. `login()` saves the user to both state and localStorage.
3. `logout()` clears both state and localStorage.
4. `loginWithGoogle()` takes Google's user data, formats it, and logs in the user.
5. `loginWithPhone()` sets a static user for phone login (uses default icon and method).

Any component wrapped inside <AuthProvider> can use `useAuth()` 
to access and manage user state and authentication methods.

===============================================================
*/

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
    const user = formatUser("phone",{});
    login(user);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loginWithGoogle, loginWithPhone }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);