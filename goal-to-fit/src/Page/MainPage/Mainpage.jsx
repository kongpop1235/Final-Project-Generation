import React from "react";

//* css
import "./MainPage.css";

//* component
import Line from "../../Component/Chart/LineChart/LineChart";
import Doughnut from "../../Component/Chart/DoughnutChart/DoughnutChart";

const MainPage = () => {
    const act = [
        { icon: "run", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run1", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run2", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run3", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run4", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run5", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run6", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run7", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run8", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run9", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run10", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run11", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run12", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run13", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run14", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run15", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run16", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run17", runing: "runing", time: "52hr", status: "try again" },
        { icon: "run18", runing: "runing", time: "52hr", status: "try again" }
    ]
    const item = []
    for (let x = 0; x < act.length; x++) {
        item.push(
            <div className="row space-between w-100p pr-30 mb-24">
                <p className="col-3">{act[x].icon}</p>
                <p className="col-3">{act[x].runing}</p>
                <p className="col-3">{act[x].time}</p>
                <p className="col-3">{act[x].status}</p>
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
                <a className="col-12 mb-10">+ Create Activity</a>
                <div className="row col-6">
                    <p className="col-12 mb-5">Usernaame</p>
                    <p className="col-12 mb-5">weigth</p>
                    <p className="col-12 mb-5">BMI</p>
                </div>
                <div className="row col-4">
                    <p className="col-12 mb-5">Goal</p>
                    <p className="col-12 mb-5">75</p>
                    <p className="col-12 mb-5">90</p>
                </div>
                <div className="row col-12 mt-24" id="act-list">
                    {item}
                </div>
            </div>
            <div className="row col-7" id="act-right">
                <div className="col-12">
                    <Line></Line>
                </div>
                <div className="col-4">
                    <Doughnut></Doughnut>
                </div>
                <div className="col-4">
                    <Doughnut></Doughnut>
                </div>
                <div className="col-4">
                    <Doughnut></Doughnut>
                </div>
            </div>
        </section >
    )
}

export default MainPage;