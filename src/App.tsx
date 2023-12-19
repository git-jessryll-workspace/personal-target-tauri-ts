import { BrowserRouter } from "react-router-dom";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";

export default function App() {
  return (
    <BrowserRouter>
      <AuthenticatedLayout />
    </BrowserRouter>
  );
}
