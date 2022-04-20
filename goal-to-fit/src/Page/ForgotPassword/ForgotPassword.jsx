import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// * css
import "./ForgotPassword.css";

// * component
import Banner from "../../Component/Banner/Banner";
import Label from "../../Component/Input/LabelText/LabelText";

const ForgotPassword = () => {
    const [username, setUsername] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");


    const submit = () => {
        if (username != "" && phonenumber != "") {
            navigate("/Home")
        } else if (username == "" && phonenumber != "") {
            alert("input username");
        } else if (username != "" && phonenumber == "") {
            alert("input phone number")
        } else {
            alert("input username and phone number");
        }
    }


    // "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    const navigate = useNavigate();
    const signInClick = () => {
        navigate("/")
    }
    const signUpClick = () => {
        navigate("/signup")
    }

    return (
        <section className="section-500 d-flex align-center text-primary">
            <div>
                <div className="mb-24">
                    <Banner>GOAL TO FIT</Banner>
                </div>
                <h1 className="mb-24">Forgot Password</h1>
                <form onSubmit={submit}>
                    <Label htmlFor="username">Username</Label>
                    <br />
                    <input type="text" id="username" value={username} onChange={user => setUsername(user.target.value)} className="w-500 field mb-24" />
                    <Label htmlFor="phone">Phone number</Label>
                    <br />
                    <input type="tel" id="phone" value={phonenumber} onChange={pnumber => setPhonenumber(pnumber.target.value)} className="w-500 field mb-24" />
                    <Label htmlFor="password">New Password</Label>
                    <input type="password" id="password" onChange={pass => setPassword(pass.target.value)} pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="Minimum eight characters, at least one letter and one number" required className="w-500 field mb-24" />
                    <input type="submit" value="Change Password" className="btn mb-24 h-40 text-center" />

                </form>
                <div className="d-flex space-between">
                    <a href="#" onClick={signInClick}>Have an Account?</a>
                    <a className="text-secondary" href="#" onClick={signUpClick}>
                        Sign Up
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;