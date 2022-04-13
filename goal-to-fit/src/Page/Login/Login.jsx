import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// * css
import "./Login.css";

// * component
import Banner from "../../Component/Banner/Banner";
import Label from "../../Component/Input/LabelText/LabelText";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if(username != "" && password != "") {
      navigate("/Home")
    } else if (username == "" && password != "") {
      alert("input username");
    } else if (username != "" && password == "") {
      alert("input password")
    } else {
      alert("input username and password");
    }
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
        <form onSubmit={submit}>
          <Label htmlFor="username">Username</Label>
          <input
            type="text"
            value={username}
            onChange={(inputUser) => setUsername(inputUser.target.value)}
            className="w-500 field mb-24"
          />
          <Label htmlFor="password">Password</Label>
          <input
            type="password"
            value={password}
            onChange={(inputPass) => setPassword(inputPass.target.value)}
            className="w-500 field mb-24"
          />
          <input type="submit" value="Sing in" className="btn mb-24 h-40 text-center" />
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