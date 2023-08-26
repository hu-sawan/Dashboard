import "./App.css";
import "./framework.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./scenes/layout/Layout";
import Dashboard from "./scenes/dashboard/Dashboard";
import Settings from "./scenes/settings/Settings";
import Profile from "./scenes/profile/Profile";
import Projects from "./scenes/projects/Projects";
import Friends from "./scenes/friends/Friends";
import Files from "./scenes/files/Files";
import Courses from "./scenes/courses/Courses";
import Subscription from "./scenes/subscription/Subscription";
import Login from "./scenes/login/Login";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route element={<Layout />}>
                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        ></Route>
                        <Route path="/settings" element={<Settings />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/projects" element={<Projects />}></Route>
                        <Route path="/courses" element={<Courses />}></Route>
                        <Route path="/friends" element={<Friends />}></Route>
                        <Route path="/files" element={<Files />}></Route>
                        <Route
                            path="/subscription"
                            element={<Subscription />}
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
