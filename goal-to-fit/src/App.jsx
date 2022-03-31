import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// * *css
import './App.css';
import './Grid.css';


// * *Page
import Login from './Page/Login/Login';
import SingUp from './Page/SignUp/SignUp';
import ForgotPassword from './Page/ForgotPassword/ForgotPassword';
import EditProfile from './Page/EditProfile/EditProfile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SingUp/>}/>
        <Route path="/forgot_password" element={<ForgotPassword/>} />
        <Route path="/Edit_profile" element={<EditProfile />}/>
      </Routes>
      <footer>@Copy Right 2022 : Goal to fit</footer>
    </BrowserRouter>
  );
}