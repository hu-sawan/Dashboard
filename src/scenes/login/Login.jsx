import "./style.css";
import React from "react";

const Switcher = ({ setActive }) => {
    return (
        <div className="switcher">
            <span
                className="signup active"
                onClick={(e) => setActive(e.target)}
            >
                signup
            </span>
            <span
                className="login swipe-left"
                onClick={(e) => setActive(e.target)}
            >
                login
            </span>
        </div>
    );
};

const ResponseArea = () => {
    return (
        <div id="responseArea">
            <span className="text-holder" />
            <span className="responseAreaAnimation">
                <span />
            </span>
        </div>
    );
};

const SignupForm = ({ setActive }) => {
    return (
        <form action="post" className="signup-form active">
            <div className="info">
                <div className="input-wrapper-50">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="Fname"
                            required={true}
                        />
                        <span className="line" />
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="Lname"
                            required={true}
                        />
                        <span className="line" />
                    </div>
                </div>
                <div className="input-wrapper">
                    <input type="tel" placeholder="Phone Number" name="phone" />
                    <span className="line" />
                </div>
                <div className="input-wrapper">
                    <input type="date" title="Date of Birth" name="dob" />
                    <span className="line" />
                </div>
                <div className="input-wrapper">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="signupEmailInput"
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
                    />
                    <span className="line" />
                </div>
                <div className="input-wrapper">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="signupPasswordInput"
                        required={true}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    />
                    <span className="line" />
                </div>
            </div>
            <div className="others">
                <span className="toLogin" onClick={(e) => setActive(e.target)}>
                    Already have an account?
                </span>
                <input type="submit" defaultValue="signup" id="signup-btn" />
            </div>
        </form>
    );
};

const LoginForm = () => {
    return (
        <form action="post" className="login-form">
            <div className="info">
                <div className="input-wrapper">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="loginEmailInput"
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$"
                    />
                    <span className="line" />
                </div>
                <div className="input-wrapper">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="loginPasswordInput"
                    />
                    <span className="line" />
                </div>
            </div>
            <div className="others">
                <span>Forgot password?</span>
                <input type="submit" defaultValue="login" id="login-btn" />
            </div>
        </form>
    );
};

const Login = () => {
    const handleActive = (target) => {
        const navElements = document.querySelectorAll(".switcher span"),
            signupForm = document.querySelector(".signup-form"),
            loginForm = document.querySelector(".login-form"),
            formsWrapper = document.querySelector(".forms-wrapper"),
            signupSpan = document.querySelector("span.signup"),
            loginSpan = document.querySelector("span.login");

        navElements.forEach((ele) => ele.classList.remove("active"));

        // Checks if the clicked element is the toLogin navigator and activate the login switcher element
        if (target.classList.contains("toLogin")) {
            loginSpan.classList.add("active");
        } else {
            target.classList.add("active");
        }

        // Activates the form based on the clicked element
        if (
            target.classList.contains("signup") &&
            !target.classList.contains("toLogin")
        ) {
            if (!signupForm.classList.contains("active")) {
                // Added swipe animation
                formsWrapper.classList.remove("swipe-right");
                formsWrapper.classList.add("swipe-left");
            }
            signupForm.classList.add("active");
            loginForm.classList.remove("active");

            // Added swipe transition
            loginSpan.classList.add("swipe-left");
            signupSpan.classList.remove("swipe-right");
        } else {
            if (!loginForm.classList.contains("active")) {
                // Added swipe animation
                formsWrapper.classList.remove("swipe-left");
                formsWrapper.classList.add("swipe-right");
            }

            loginForm.classList.add("active");
            signupForm.classList.remove("active");

            // Added swipe transition
            loginSpan.classList.remove("swipe-left");
            signupSpan.classList.add("swipe-right");
        }
    };

    return (
        <div className="main-wrapper">
            <div className="wrapper">
                <Switcher setActive={handleActive} />
                <ResponseArea />
                <div className="forms-wrapper">
                    <SignupForm setActive={handleActive} />
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};
export default Login;
