import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
    return (
        <div className="main-container d-flex">
            <Sidebar />
            <div className="content hidden w-100">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
