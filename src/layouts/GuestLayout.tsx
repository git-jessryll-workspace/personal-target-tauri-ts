import { LoginPage } from "@/pages";
import { Route, Routes } from "react-router-dom";


const GuestLayout = () => {
    return <div>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </div>
}

export default GuestLayout;