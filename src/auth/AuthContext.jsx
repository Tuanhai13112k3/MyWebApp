import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContextValue";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem("user");
      if (saved) setUser(JSON.parse(saved));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const login = (role = "user") => {
    const fakeUser = { id: 1, role };
    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
