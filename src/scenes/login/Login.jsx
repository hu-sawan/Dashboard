import "./style.css";
import React from "react";

const Switcher = () => {
    return (
        <div className="switcher">
            <span className="signup active" onClick={console.log("clicked")}>
                signup
            </span>
            <span className="login swipe-left" onClick={console.log("clicked")}>
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

const SignupForm = () => {
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
                <span onClick={console.log("clicked")} className="toLogin">
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
    return (
        <div className="main-wrapper">
            <div className="wrapper">
                <Switcher />
                <ResponseArea />
                <div className="forms-wrapper">
                    <SignupForm />
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};
export default Login;
