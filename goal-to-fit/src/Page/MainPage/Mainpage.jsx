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
        console.log(event);
        sessionStorage.setItem("detail", event);
        navigate("/Detail");
    };

    const session = JSON.parse(sessionStorage.getItem("data"));
    console.log('session');
    console.log(session);

    // const sessionActivity = [
    //     "walk",
    //     "run",
    //     "bikking",
    //     "swimming",
    //     "pushups",
    //     "hulaHoop",
    //     "boxing",
    //     "badminton",
    //     "yoga"
    // ];
    // Object.keys(session.activity).forEach(function (key) {
    //     sessionActivity.push({ id: key, detail: session.activity[key] });
    // });
    // console.log("----------------------");
    // console.log("sessionActivity");
    // console.log(sessionActivity);
    // console.log("----------------------");

    // console.log("act name")
    // console.log(activitySessin.length);

    //รายละเอียด
    const bmi = (session.weight / Math.pow((session.height / 100), 2)).toFixed(2);

    const actMain = [
        {
            "id": "run",
            "css": "label-run act-icon text-center",
            "act": "Runing",
            "icon": "./svg/runing.svg",
            "location": "out"
        }, {
            id: "walk",
            css: "label-walk act-icon text-center",
            act: "Walk",
            icon: "./svg/walking.svg",
            location: "out"
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

    console.log("---------------");
    console.log("session[actMain[1].id]");
    console.log(session[`${actMain[1].id}`]);
    const testSession = session.walk;
    console.log("session.walk");
    console.log(testSession);

    const act = [];
    for (var y = 0; y < actMain.length; y++) {
            act.push({
                id: actMain[y].id,
                icon: actMain[y].icon,
                activity: actMain[y].act,
                status: "try again",
            });
    };
    console.log("---------------");
    console.log("act");
    console.log(act);
    console.log("---------------");



    // for (let x = 0; x < sessionActivity.length; x++) {
    //     act.push({ icon: actMain[x].icon, activity: actMain[x].act, time: "52hr", status: "try again" })
    // }
    const item = [];
    const delay = [
        "box row mb-10 animated fadeInUp delay-200",
        "box row mb-10 animated fadeInUp delay-225",
        "box row mb-10 animated fadeInUp delay-250",
        "box row mb-10 animated fadeInUp delay-275",
        "box row mb-10 animated fadeInUp delay-300",
        "box row mb-10 animated fadeInUp delay-325",
        "box row mb-10 animated fadeInUp delay-350",
        "box row mb-10 animated fadeInUp delay-375",
        "box row mb-10 animated fadeInUp delay-400",
        "box row mb-10 animated fadeInUp delay-425",
        "box row mb-10 animated fadeInUp delay-450",
        "box row mb-10 animated fadeInUp delay-475",
        "box row mb-10 animated fadeInUp delay-500",
        "box row mb-10 animated fadeInUp delay-525",
        "box row mb-10 animated fadeInUp delay-550",
    ];
    for (let x = 0; x < act.length; x++) {
        item.push(
            // style={{animationDelay: `${delay}`}}
            <div className={delay[x]}>
                <div className="box__bottom d-flex justify-center align-center pointer mr-15" onClick={() => detail(act[x].id,)}>
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
                <h3 className="col-6 mb-10 animated fadeInUp delay-050">Active lists</h3>
                <h3 className="col-6 animated fadeInUp delay-075">Today Progress</h3>
            </div>
            <div className="row col-5 border" id="act-left">
                <div className="row col-6">
                    <p className="col-12 mb-5 animated fadeInUp delay-100">{session.username}</p>
                    <p className="col-12 mb-5 animated fadeInUp delay-125">Weigth : {session.weight}</p>
                    <p className="col-12 mb-5 animated fadeInUp delay-150">BMI : {bmi}</p>
                </div>
                <div className="row col-4">
                    <p className="col-12 mb-5 animated fadeInUp delay-175">Goal der day : {session.calories_gold}</p>
                </div>
                <div className="row col-12 mt-24 pr-15" id="act-list">
                    {item}
                </div>
            </div>
            <div className="row col-7" id="act-right">
                <div className="col-12">
                    <Line />
                </div>
                <div className="col-4 animated fadeInUp delay-200">
                    <Doughnut />
                </div>
                <div className="col-4 animated fadeInUp delay-225">
                    <Doughnut />
                </div>
                <div className="col-4 animated fadeInUp delay-250">
                    <Doughnut />
                </div>
            </div>
        </section >
    )
}

export default MainPage;