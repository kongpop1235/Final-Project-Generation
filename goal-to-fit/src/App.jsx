import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//* css
import "./App.css";
import "./Grid.css";

//* NavBar
import NavBar from "./Component/NavBar/NavBar"

//* Page
import Login from "./Page/Login/Login";
import SingUp from "./Page/SignUp/SignUp";
import ForgotPassword from "./Page/ForgotPassword/ForgotPassword";
import EditProfile from "./Page/EditProfile/EditProfile";
import MainPage from "./Page/MainPage/Mainpage";
import Activity from "./Page/Activity/Activity";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/Edit_profile" element={<EditProfile />} />
        <Route path="/Home" element={<MainPage />}></Route>
        <Route path="/Activity" element={<Activity />}></Route>
      </Routes>
      <footer>@Copy Right 2022 : Goal to fit</footer>
    </BrowserRouter>
  );
}

export default App;