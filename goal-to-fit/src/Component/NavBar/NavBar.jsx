import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

//* css
import "./NavBar.css";

//* icon
import IconHome from "../../Component/icon/svg/IconHome";
import IconActive from "../../Component/icon/svg/IconActive";
import IconProfile from "../../Component/icon/svg/IconProfile";
import IconLogout from "../../Component/icon/svg/IconLogout";

const NavBar = () => {
    //* route
    const navigate = useNavigate();
    const homeClick = () => {
        navigate("/Home")
    }
    const activityClick = () => {
        navigate("/Activity")
    }
    const logOutClick = () => {
        navigate("/")
    }

    //* checkpart
    const Location = useLocation().pathname;
    var check = true;
    var header = "";
    console.log(Location);
    if(Location == '/'){
        check = false;
    } else if (Location == '/signup') {
        check = false;
    } else if (Location == '/forgot_password') {
        check = false;
    } else if (Location == '/Home') {
        header = "Active Reports"
    } else if (Location == '/Activity') {
        header = "Activity"
    }

    return (
        <nav className={check === true? "nav container":"d-none"}>
            <h1 className="ml-24 font-700 text-primary float-left">{header}</h1>
            <ul className="float-right list-none text-primary d-flex">
                <li className="d-flex mr-24 align-center nav-icon" onClick={homeClick}><IconHome /><span className="ml-10">Home    </span></li>
                <li className="d-flex mr-24 align-center nav-icon" onClick={activityClick}><IconActive /><span className="ml-10">Active  </span></li>
                <li className="d-flex mr-24 align-center nav-icon" ><IconProfile /><span className="ml-10">Profile </span></li>
                <li className="d-flex align-center nav-icon" onClick={logOutClick}><IconLogout /><span className="ml-10">Logout  </span></li>
            </ul>            
        </nav>
    )
}

export default NavBar;