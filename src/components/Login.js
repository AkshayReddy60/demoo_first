import React, { useState } from "react";
import './Login.css';

const Login = () => {
    const [action, setAction] = useState("");

    const createlink = () => {
        setAction('active');
    };

    const loginlink = () => {
        setAction('');
    };

    return (
        <>
            <div className={`wapp ${action}`}>
                <div className="form-box login">
                    <form action="">
                        <h1>LOGIN</h1>
                        <div className="input-box">
                            <input type="email" placeholder="email@.com" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="password" />
                        </div>
                        <div className="forget">
                            <a href='#' >Forget password</a>
                        </div>
                        <button type="submit">Login</button>
                        <div className="register">
                            <p>Don't have an account? <a href="#" onClick={createlink}>Create account</a></p>
                        </div>
                    </form>
                </div>
                <div className="form-box create">
                    <form action="">
                        <h1>Create Account</h1>
                        <div className="input-box">
                            <input type="email" placeholder="email@.com" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="password" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Confirm password" />
                        </div>
                        <div className="terms">
                            <label>
                                <input type="checkbox" /> Agree to all terms and conditions
                            </label>
                        </div>
                        <button type="submit">Create</button>
                        <div className="register">
                            <p>Already have an account? <a href="#" onClick={loginlink}>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
