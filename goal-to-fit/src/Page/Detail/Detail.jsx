import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//*css
import "./Detail.css";

const Deatil = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const EditClose = () => {
        setShowEdit(false);
    }
    const EditShow = () => {
        setShowEdit(true);
    }

    const detail = (sessionStorage.getItem("detail"));
    const session = JSON.parse(sessionStorage.getItem("data"));
    console.log(detail);
    console.log(session);

    const sessionActivity = [];
    Object.keys(session.activity).forEach(function (key) {
        sessionActivity.push({ id: key, detail: session.activity[key] });
    })
    console.log("----------------------");
    console.log("sessionActivity");
    console.log(sessionActivity);
    console.log("----------------------");


    const item = [];
    const delay = [
        "row mb-24 list-detail animated fadeInUp delay-100",
        "row mb-24 list-detail animated fadeInUp delay-125",
        "row mb-24 list-detail animated fadeInUp delay-150",
        "row mb-24 list-detail animated fadeInUp delay-175",
        "row mb-24 list-detail animated fadeInUp delay-200",
        "row mb-24 list-detail animated fadeInUp delay-225",
        "row mb-24 list-detail animated fadeInUp delay-250",
        "row mb-24 list-detail animated fadeInUp delay-275",
        "row mb-24 list-detail animated fadeInUp delay-300",
        "row mb-24 list-detail animated fadeInUp delay-325",
        "row mb-24 list-detail animated fadeInUp delay-350",
        "row mb-24 list-detail animated fadeInUp delay-375",
        "row mb-24 list-detail animated fadeInUp delay-400",
        "row mb-24 list-detail animated fadeInUp delay-425",
        "row mb-24 list-detail animated fadeInUp delay-450",
    ];
    for (let x = 0; x < sessionActivity.length; x++) {
        item.push(
            <div className={delay[x]}>
                <p className="col-4 d-flex justify-center align-center">วิ่งที่สวนลุม</p>
                <p className="col-2 d-flex justify-center align-center">Duration : 100 min</p>
                <p className="col-2 d-flex justify-center align-center">Calories : 200</p>
                <p className="col-2 d-flex justify-center align-center">Date : 12/12/2012</p>
                <div className="col-1">
                    <div className="box row">
                        <div className="box__right d-flex justify-center align-center pointer">
                            <svg className="color" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 408.483 408.483" >
                                <g>
                                    <g>
                                        <path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316
			                                H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293
			                                c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329
			                                c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355
			                                c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356
			                                c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z" />
                                        <path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916
			                                c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="row d-flex justify-center align-center w-100p">
                            <p className="d-flex align-center delete">delete</p>
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="box row">
                        <div className="box__left d-flex justify-center align-center pointer" onClick={EditShow}>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="20px" width="20px" viewBox="0 0 306.637 306.637">
                                <g>
                                    <g>
                                        <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
			                    l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"
                                        />
                                        <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
			                    L265.13,75.602L231.035,41.507z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="row d-flex justify-center align-center w-100p">
                            <p className="align-center edit">edit</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="section-full">
            <div hidden={!showEdit}>
                <div className="modal-background d-flex align-center">
                    <div className="modal-card" id="services-dialog">
                        <p>title :</p>
                        <input className="w-100p field mb-24" type="text" />
                        <p>Duration (min):</p>
                        <input className="w-100p field mb-24" type="text" />
                        <p>Date :</p>
                        <DatePicker className="w-100p field mb-24" selected={startDate} onChange={(date) => setStartDate(date)} />
                        <div className="row text-center space-between">
                            <div className="col-3">
                                <button id="btn-save" className="btn text-center text-center h-40 mt-24 mb-24 text-upper" onClick={EditClose}>Save</button>
                            </div>
                            <div className="col-3">
                                <button id="btn-close" className="btn text-center text-center h-40 mt-24 mb-24 text-upper" onClick={EditClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="add" className="row d-flex justify-center align-center pointer animated fadeInUp delay-050">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 45.402 45.402" >
                    <g>
                        <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		                            c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		                            c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		                            c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                        />
                    </g>
                </svg>
            </div>
            <div className="mt-24 pr-15 animated fadeInUp delay-075" id="act-list-detail">
                {item}
            </div>
        </section>
    )
}

export default Deatil;