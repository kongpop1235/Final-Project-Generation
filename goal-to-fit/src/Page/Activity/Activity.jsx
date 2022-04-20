import { useState } from "react";
import JSONDATA from "./DATATEST.json";

//* css
import "./Activity.css";

//*component
import Input from "../../Component/Input/InputText/InputText";

const Activity = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [Location, setLocation] = useState('');
    const [sessionActivity, setSessionActivity] = useState([]);

    const session = JSON.parse(sessionStorage.getItem("data"));
    console.log("session.activity");
    console.log(session.activity);
    console.log("------------------------------");


    Object.keys(session.activity).forEach(function (key) {
        // console.log(key) // boxA, boxB, boxC
        // console.log(session.activity[key]) // {color: "red", width: 100}, etc.
        sessionActivity.push({ id: key, detail: session.activity[key] });
    });
    console.log("sessionActivity");
    console.log(sessionActivity);
    console.log("------------------------------");


    const actMain = [{
        "id": "run",
        "css": "label-run act-icon text-center",
        "act": "Run",
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
    }
    ]
    console.log("actMain");
    console.log(actMain);
    console.log("------------------------------");

    const act = [];
    for (var y = 0; y < sessionActivity.length; y++) {
        act.push({
            icon: actMain[y].icon,
            activity: actMain[y].act,
            detail: actMain.find(({ id }) => id == sessionActivity[y].id),
            time: 60 * sessionActivity[y].detail.duration,
        });
    };
    console.log("---------------");
    console.log("act");
    console.log(act);
    console.log("---------------");





    const inCheck = () => {
        setLocation(true);
    }
    const outCheck = () => {
        setLocation(false);
    }

    return (
        <section className="section-full row">
            {actMain.filter((valuemain) => { return valuemain; })
                .map((valuemain, key) => {
                    return (<input type="checkBox" name="checkList" value={valuemain.id} id={valuemain.id} className="d-none" />);
                })}
            <div className="col-6 mt-15 d-flex space-between align-start">
                <div className="search row col-10 mx-auto">
                    <div className="row col-12">
                        <input
                            type="text"
                            className="search__input text-center mb-24"
                            placeholder="Search..."
                            onChange={event => {
                                setSearchTerm(event.target.value)
                            }}
                        />
                    </div>
                    <div className="row col-12 mt-15">
                        {actMain.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.act.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map((val, key) => {
                            return (
                                <div className="col-3 mt-15 d-flex justify-center" key={key}>
                                    <label htmlFor={val.id} className={val.css}>
                                        <img className="pt-15" src={val.icon} />
                                        <p>{val.act}</p>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="col-6 mt-15 d-flex space-between align-start">
                <div className="search row col-10 mx-auto d-flex space-between">
                    <h3 className="col-6 d-flex align-center" style={{ height: "2.5rem" }}>Activities Package</h3>
                    <div className="col-6 segmented-control-act float-right">
                        <input type="radio" name="radio2" value="1" id="tab-act-1" />
                        <label onClick={inCheck} htmlFor="tab-act-1" className="segmented-control__1-act">
                            <p className="text-upper font-weight">InSide</p>
                        </label>

                        <input type="radio" name="radio2" value="2" id="tab-act-2" />
                        <label onClick={outCheck} htmlFor="tab-act-2" className="segmented-control__2-act">
                            <p className="text-upper font-weight">OutSide</p>
                        </label>
                        <div className="segmented-control__color-act"></div>
                    </div>
                    <div className="row col-12 mt-15">
                        {actMain.filter((val) => {
                            if (Location === true && val.location.includes("in")) {
                                return val;
                            } else if (Location === false && val.location.includes("out")) {
                                return val;
                            }
                        }).map((val, key) => {
                            return (
                                <div className="col-3 mt-15 d-flex justify-center" key={key}>
                                    <label htmlFor={val.id} className={val.css}>
                                        <img className="pt-15" src={val.icon} />
                                        <p>{val.act}</p>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="col-12">
                <Input type="submit" value="Save" className="btn mb-24 h-40 text-center"></Input>
            </div>
        </section>
    )
}

export default Activity;