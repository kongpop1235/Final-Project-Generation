import React from "react";
import { useNavigate } from "react-router-dom";

// * css
import "./Login.css";

// * component
import Banner from "../../Component/Banner/Banner";
import Label from "../../Component/Input/LabelText/LabelText";
import Input from "../../Component/Input/InputText/InputText";

const Login = () => {
  const navigate = useNavigate();
  const signInClick = () => {
    navigate("/Home")
  }
  const signUpClick = () => {
    navigate("/signup")
  }
  const forgotPasswordClick = () => {
    navigate("/forgot_password")
  }

  return (
    <section className="section-500 d-flex align-center text-primary index-1">
      <div>
        <div className="mb-24">
          <Banner>GOAL TO FIT</Banner>
        </div>
        <h1 className="mb-24">Sign In</h1>
        <form>
          <Label htmlFor="username">Username</Label>
          <br />
          <Input type="text" className="w-500 field mb-24"></Input>
          <Label htmlFor="password">Password</Label>
          <br />
          <Input type="password" className="w-500 field mb-24"></Input>
          <span onClick={signInClick}>
            <Input type="submit" value="Sing in" className="btn mb-24 h-40 text-center"></Input>
          </span>
        </form>
        <div className="d-flex space-between">
          <a className="text-primary" href="#" onClick={forgotPasswordClick}>
            Forgot Password?
          </a>
          <a className="text-secondary" href="#" onClick={signUpClick}>
            Sign Up
          </a>
        </div>
      </div>
    </section>
  )
};

export default Login;