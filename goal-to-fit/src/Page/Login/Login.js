import React from "react";

import Banner from "../../Component/Banner/Banner";

const Login = () => {
  return (
    <main>
      <div className="section">
        <div>
          <Banner>Login</Banner>
        </div>
        <div>
          <h2 className="mb-24">Sign In</h2>
          <br />
          <input
            placeholder="Your password"
            type="input"
            className="w-500 field"
          />
        </div>
        <div className="mb-24">
          <label htmlFor="">Password</label>
          <br />
          <input
            placeholder="Your password"
            type="input"
            className="w-500 field"
          />
        </div>
        <button id="btn-signin" className="mb-24 h-40 text-center">
          Sign In
        </button>
        <div className="d-flex space-between">
          <div>
            <br />
            <a className="mb-24 text-primary" href="#">
              Forgot Password?
            </a>
          </div>
          <div>
            <br />
            <a className="text-secondary" href="#">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;