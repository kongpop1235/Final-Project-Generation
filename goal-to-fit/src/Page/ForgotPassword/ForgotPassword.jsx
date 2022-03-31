import React from "react";
import { useNavigate } from "react-router-dom";

// * css
import "./ForgotPassword.css";

// * component
import Banner from "../../Component/Banner/Banner";
import Label from "../../Component/Input/LabelText/LabelText";
import Input from "../../Component/Input/InputText/InputText";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const signInClick = () => {
        navigate("/")
    }
    const signUpClick = () => {
        navigate("/signUp")
    }

    return (
        <section className="section-500 d-flex align-center text-primary">
            <div>
                <div className="mb-24">
                    <Banner>GOAL TO FIT</Banner>
                </div>
                <h1 className="mb-24">Forgot Password</h1>
                <form>
                    <Label htmlFor="username">Username</Label>
                    <br />
                    <Input type="text" className="w-500 field mb-24"></Input>
                    <Label htmlFor="phone">Phone number</Label>
                    <br />
                    <Input type="tel" className="w-500 field mb-24"></Input>
                    <Input type="submit" value="Change password" className="btn mb-24 h-40 text-center"></Input>
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