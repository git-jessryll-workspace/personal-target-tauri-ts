import { BrowserRouter } from "react-router-dom";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { useEffect, useState } from "react";
import GuestLayout from "./layouts/GuestLayout";

export default function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    if (!isLogin) {
      const { pathname } = window.location;
      if (pathname !== "/login") {
        window.location.href = "/login";
      }
      return;
    }
  }, []);
  return (
    <BrowserRouter>
      {isLogin ? <AuthenticatedLayout /> : <GuestLayout />}
    </BrowserRouter>
  );
}
