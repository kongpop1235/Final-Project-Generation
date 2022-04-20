import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// * css
import "./EditProfile.css";

// * component
// import CheckBox from "../../Component/Input/CheckBox/CheckBox";

const EditProfile = () => {
    const navigate = useNavigate();
    const [birthYear, setBirthYear] = useState(new Date());
    const [gender, setGender] = useState("Male");
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [calories, setCalories] = useState();
    const sessionOld = JSON.parse(sessionStorage.getItem("data"));
    

    const male = () => {
        alert("male");
    }



    // const navigate = useNavigate();
    const submit = (event) => {
        event.preventDefault();
        const sessionNew = {
            username: sessionOld.username,
            password: sessionOld.password,
            phone: sessionOld.phone,
            gender: gender,
            birth: birthYear.getFullYear(),
            height: height,
            weight: weight,
            calories_gold: calories
        };
        sessionStorage.clear();
        // console.log(event);
        // console.log(birthYear.getFullYear());
        // console.log(gender);
        // console.log(height);
        // console.log(weight);
        // console.log(calories);
        axios.post('http://localhost:4000/api/signup', sessionNew)
            .then(res => {
                if (res.data === true) {
                    alert("ok");
                    navigate("/");
                } else {
                    alert("something worng");
                }
            })
    }
    return (
        <section className="section-700 d-flex align-center text-primary">
            <div className="container">
                <h1 className="text-center mb-24">Username</h1>
                <form onSubmit={submit} className="row space-between">
                    <div className="col-6-md col-3 pr-30">
                        <div className="mb-15 font-700">
                            <label htmlFor="gender">Gender</label>
                        </div>
                        <div id="gender" className="segmented-control"
                            onChange={g => setGender(g.target.value)}>
                            <input type="radio" name="radio" value="male" id="tab-1" defaultChecked />
                            <label htmlFor="tab-1" className="segmented-control__1">
                                <p className="text-upper font-weight">Male</p>
                            </label>
                            <input type="radio" name="radio" value="female" id="tab-2" />
                            <label htmlFor="tab-2" className="segmented-control__2">
                                <p className="text-upper font-weight">female</p>
                            </label>
                            <div className="segmented-control__color"></div>
                        </div>
                    </div>
                    <div className="col-6-md col-3 px-30">
                        <div className="mb-15 font-700">
                            <label htmlFor="DatePicker">Birth Year</label>
                        </div>
                        <DatePicker
                            id="DatePicker"
                            type="string"
                            className="text-primary text-center"
                            selected={birthYear}
                            onChange={(date) => setBirthYear(date)}
                            showYearPicker
                            dateFormat="yyyy"
                            required
                        />
                    </div>
                    <div className="col-6-md col-3 pr-30">
                        <div className="mb-15 font-700">
                            <label htmlFor="height">Height</label>
                        </div>
                        <input
                            type="number"
                            id="height"
                            title="Number only"
                            required
                            onChange={h => setHeight(h.target.value)}
                            className="input-profile text-primary text-center"
                        />
                    </div>
                    <div className="col-6-md col-3 pr-30">
                        <div className="mb-15 font-700">
                            <label htmlFor="width" >Weight</label>
                        </div>
                        <input
                            type="number"
                            id="width"
                            title="Number only"
                            required
                            onChange={w => setWeight(w.target.value)}
                            className="input-profile text-primary text-center"
                        />
                    </div>
                    <div className="col-12-md col-4 mt-24">
                        <div className="mb-15 font-700">
                            <label htmlFor="calories">Calories Goal (per day)</label>
                        </div>
                        <input
                            type="number"
                            id="calories"
                            required
                            onChange={c => setCalories(c.target.value)}
                            className="input-profile text-primary text-center"
                        />
                        {/* <ul id="ui-check" className="tg-list space-between py-auto">
                            <CheckBox dataTg="M" id="mon" className=""></CheckBox>
                            <CheckBox dataTg="TU" id="tue"></CheckBox>
                            <CheckBox dataTg="W" id="wed"></CheckBox>
                            <CheckBox dataTg="TH" id="thu"></CheckBox>
                            <CheckBox dataTg="F" id="fri"></CheckBox>
                            <CheckBox dataTg="SA" id="sat"></CheckBox>
                            <CheckBox dataTg="SU" id="sun"></CheckBox>
                        </ul> */}
                    </div>
                    <input type="submit" value="Save" className="btn col-12 mt-24 h-40 text-center text-upper space-5" />
                </form>
            </div>
        </section>
    )
}

export default EditProfile;