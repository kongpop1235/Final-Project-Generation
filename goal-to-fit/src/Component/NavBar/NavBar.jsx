import React from "react";

//* css
import "./NavBar.css";

//* icon
import IconHome    from "../../Component/icon/svg/IconHome"   ;
import IconActive  from "../../Component/icon/svg/IconActive" ;
import IconProfile from "../../Component/icon/svg/IconProfile";
import IconLogout  from "../../Component/icon/svg/IconLogout" ;

const NavBar = () => {
    return (
        <nav className="nav container">
            <h1 className="font-700 text-primary float-left">Active Reports</h1>
            <ul className="float-right list-none text-primary d-flex">
                <li className="d-flex mr-24 align-center nav-icon"><IconHome    /><span className="ml-10">Home    </span></li>
                <li className="d-flex mr-24 align-center"         ><IconActive  /><span className="ml-10">Active  </span></li>
                <li className="d-flex mr-24 align-center"         ><IconProfile /><span className="ml-10">Profile </span></li>
                <li className="d-flex mr-24 align-center"         ><IconLogout  /><span className="ml-10">Logout  </span></li>
            </ul>
        </nav>
    )
}

export default NavBar;