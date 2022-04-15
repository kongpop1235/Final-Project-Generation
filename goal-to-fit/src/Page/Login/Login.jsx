import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// * css
import "./Login.css";

// * component
import Banner from "../../Component/Banner/Banner";
import Label from "../../Component/Input/LabelText/LabelText";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const login = {
      username: username,
      password: password,
    }
    axios.get('http://localhost:4000/api/login', login)
      .then(res => console.log(res.data))
    // if (res.data == true) {
    //   navigate("/Home")
    // } else {
    //   console.log("else");
    // }
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
        <h1 className="mb-24">LogIn</h1>
        <form onSubmit={submit}>
          <Label htmlFor="username">Username</Label>
          <input
            id="usrname"
            type="text"
            onChange={user => setUsername(user.target.value)}
            required
            className="w-500 field mb-24"
          />
          <Label htmlFor="password">Password</Label>
          <input
            id="password"
            type="password"
            onChange={pass => setPassword(pass.target.value)}
            required
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