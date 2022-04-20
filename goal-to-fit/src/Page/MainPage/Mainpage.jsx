import React from "react";
import { useNavigate } from "react-router";

//* css
import "./MainPage.css";

//* component
import Line from "../../Component/Chart/LineChart/LineChart";
import Doughnut from "../../Component/Chart/DoughnutChart/DoughnutChart";

const MainPage = () => {
    //* route 
    const navigate = useNavigate();
    const detail = (event) => {
        alert("detail");
        console.log(event);
        sessionStorage.setItem("detail", event);
        navigate("/Detail");
    };

    const session = JSON.parse(sessionStorage.getItem("data"));
    // console.log(session);

    const sessionActivity = [];
    Object.keys(session.activity).forEach(function (key) {
        // console.log(key) // boxA, boxB, boxC
        // console.log(session.activity[key]) // {color: "red", width: 100}, etc.
        sessionActivity.push({ id: key, detail: session.activity[key] });
    });
    console.log("----------------------");
    console.log("sessionActivity");
    console.log(sessionActivity);
    console.log("----------------------");

    // console.log("act name")
    // console.log(activitySessin.length);

    //รายละเอียด
    const username = session.username;
    const weight = session.weight;
    const height = session.height;
    const bmiclaculater = weight / Math.pow((height / 100), 2);
    const bmi = bmiclaculater.toFixed(2);
    const goal = session.calories_gold;


    const actMain = [
        {
            "id": "run",
            "css": "label-run act-icon text-center",
            "act": "Runing",
            "icon": "./svg/runing.svg",
            "location": "out"
        }, {
            "id": "walk",
            "css": "label-walk act-icon text-center",
            "act": "Walk",
            "icon": "./svg/walking.svg",
            "location": "out"
        }, {
            "id": "bikking",
            "css": "label-bikking act-icon text-center",
            "act": "Bikking",
            "icon": "./svg/biking.svg",
            "location": "out"
        }, {
            "id": "swimming",
            "css": "label-swimming act-icon text-center",
            "act": "Swimming",
            "icon": "./svg/swimming.svg",
            "location": "out"
        }, {
            "id": "pushups",
            "css": "label-pushups act-icon text-center",
            "act": "Pushups",
            "icon": "./svg/pushups.svg",
            "location": "in"
        }, {
            "id": "hulaHoop",
            "css": "label-hulaHoop act-icon text-center",
            "act": "Hula hoop",
            "icon": "./svg/hulaHoop.svg",
            "location": "in"
        }, {
            "id": "boxing",
            "css": "label-boxing act-icon text-center",
            "act": "Boxing",
            "icon": "./svg/boxing.svg",
            "location": "in"
        }, {
            "id": "badminton",
            "css": "label-badminton act-icon text-center",
            "act": "Badminton",
            "icon": "./svg/badminton.svg",
            "location": "out"
        }, {
            "id": "yoga",
            "css": "label-yoga act-icon text-center",
            "act": "Yoga",
            "icon": "./svg/yoga.svg",
            "location": "in"
        }, {
            "id": "weight",
            "css": "label-weight act-icon text-center",
            "act": "Weight",
            "icon": "./svg/weight.svg",
            "location": "in"
        }, {
            "id": "bickycle",
            "css": "label-bickycle act-icon text-center",
            "act": "Bicycle",
            "icon": "./svg/bicycle.svg",
            "location": "out"
        }
    ];
    console.log("actMain");
    console.log(actMain);


    const act = [];
    for (var y = 0; y < sessionActivity.length; y++) {
        if (sessionActivity[y].detail.show === false) {
            act.push({
                id: actMain[y].id,
                icon: actMain[y].icon,
                activity: actMain[y].act,
                status: "try again",
                detail: actMain.find(({ id }) => id == sessionActivity[y].id),
                time: 60 * sessionActivity[y].detail.duration
            });
        }
    };
    console.log("---------------");
    console.log("act");
    console.log(act);
    console.log("---------------");



    // for (let x = 0; x < sessionActivity.length; x++) {
    //     act.push({ icon: actMain[x].icon, activity: actMain[x].act, time: "52hr", status: "try again" })
    // }
    const item = []
    for (let x = 0; x < act.length; x++) {
        item.push(
            <div className="box row mb-10">
                <div className="box__bottom d-flex justify-center align-center pointer" onClick={() => detail(act[x].id, )}>
                    <p className="text-upper font-weight letter-3">detail</p>
                </div>
                <div className="row space-between w-100p pr-30">
                    <img src={act[x].icon} />
                    <p className="col-3 d-flex align-center">{act[x].activity}</p>
                    <p className="col-3 d-flex align-center">{act[x].time}</p>
                    <p className="col-3 d-flex align-center">{act[x].status}</p>
                </div>
            </div>
        )
    }



    return (
        <section className="section-full">
            <div className="row">
                <h3 className="col-6 mb-10">Active lists</h3>
                <h3 className="col-6">Today Progress</h3>
            </div>
            <div className="row col-5 border" id="act-left">
                <div className="row col-6">
                    <p className="col-12 mb-5">{username}</p>
                    <p className="col-12 mb-5">Weigth : {weight}</p>
                    <p className="col-12 mb-5">BMI : {bmi}</p>
                </div>
                <div className="row col-4">
                    <p className="col-12 mb-5">Goal der day : {goal}</p>
                </div>
                <div className="row col-12 mt-24" id="act-list">
                    {item}
                </div>
            </div>
            <div className="row col-7" id="act-right">
                <div className="col-12">
                    <Line />
                </div>
                <div className="col-4">
                    <Doughnut />
                </div>
                <div className="col-4">
                    <Doughnut />
                </div>
                <div className="col-4">
                    <Doughnut />
                </div>
            </div>
        </section >
    )
}

export default MainPage;