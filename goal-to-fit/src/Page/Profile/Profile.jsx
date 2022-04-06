import React from "react";
import { useNavigate } from "react-router-dom";

import "./Profile.css";

const Profile = () => {
    const navigate = useNavigate();
    const edit = () => {
        navigate("/Edit_profile")
    }
    return (
        <section className="section-700 d-flex align-center text-primary">
            <div className="container" style={{}}>
                <h1 className="text-center mb-24">Username</h1>
                <form className="row space-between">
                    <div className="col-6-md col-3 pr-30">
                        <div className="mb-15 font-700">
                            <p>Gender</p>
                        </div>
                        <p>male</p>
                    </div>
                    <div className="col-6-md col-3 px-30">
                        <div className="mb-15 font-700">
                            <p>Birth Year</p>
                        </div>
                        <p>1998s</p>
                    </div>
                    <div className="col-6-md col-3 pr-30">
                        <div className="mb-15 font-700">
                            <p>Height</p>
                        </div>
                        <p>200</p>
                    </div>
                    <div className="col-6-md col-3 pr-30">
                        <div className="mb-15 font-700">
                            <p>Weight</p>
                        </div>
                        <p>100</p>
                    </div>
                    <div className="col-12-md col-4 mt-24">
                        <div className="mb-15 font-700">
                            <p>Exercise day</p>
                        </div>
                        <ul id="ui-check" class="tg-list space-between py-auto">
                            <li className="list-none">M</li>
                            <li className="list-none">N</li>
                            <li className="list-none">N</li>
                            <li className="list-none">N</li>
                            <li className="list-none">N</li>
                            <li className="list-none">N</li>
                            <li className="list-none">N</li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-4 mt-24">
                        <div className="mb-15 font-700">
                            <p>Start time</p>
                        </div>
                        <p>12:12</p>
                    </div>
                    <button className="col-12 btn mb-24 h-40 text-center" onClick={edit}>Edit</button>
                </form>
            </div>
        </section>
    )
}

export default Profile;