import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

let navItems = [
    {
        text: "Dashboard",
        icon: null,
    },
    {
        text: "Settings",
        icon: null,
    },
    {
        text: "Profile",
        icon: null,
    },
    {
        text: "Projects",
        icon: null,
    },
    {
        text: "Courses",
        icon: null,
    },
    {
        text: "Friends",
        icon: null,
    },
    {
        text: "Files",
        icon: null,
    },
    {
        text: "Subscription",
        icon: null,
    },
];

const Sidebar = () => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
        <aside className="p-20 bg-white relative">
            <h3 className="txt-c mt-0 relative">S7S</h3>
            <ul>
                {navItems.map(({ text, icon }) => {
                    let lowerCase = text.toLowerCase();
                    return (
                        <li
                            className="fs-14 d-flex txt-black align-c p-10 r-6"
                            key={text}
                            onClick={() => {
                                navigate(`/${lowerCase}`);
                                setActive(lowerCase);
                            }}
                            style={{
                                backgroundColor:
                                    active === lowerCase
                                        ? "#f6f6f6"
                                        : "transparent",
                                cursor: "pointer",
                            }}
                        >
                            {icon}
                            <span>{text}</span>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
