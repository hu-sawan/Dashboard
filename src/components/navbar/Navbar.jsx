import "./style.css";
import React from "react";
import profileImage from "../../assets/avatar.webp";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="search relative">
                <input
                    className="r-10 p-10 b-ccc"
                    type="search"
                    placeholder="Type a keywoard"
                />
            </div>
            <div className="icons">
                <span className="notifications">
                    <i className="fa-regular fa-bell fa-fw"></i>
                </span>
                <img src={profileImage} alt="profile" />
            </div>
        </div>
    );
};

export default Navbar;
