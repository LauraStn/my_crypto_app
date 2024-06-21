"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  loggedIn: false,
  logout: () => {},
});
export const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(token !== null);
  }, [loggedIn]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setLoggedIn(false);
    push("/");
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
