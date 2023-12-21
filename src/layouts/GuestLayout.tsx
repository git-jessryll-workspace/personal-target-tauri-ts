import { ForgotPasswordPage, LoginPage } from "@/pages";
import { Route, Routes } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </div>
  );
};

export default GuestLayout;
