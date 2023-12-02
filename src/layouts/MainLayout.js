import {Outlet} from "react-router-dom";
import Navbar from "../pages/navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;