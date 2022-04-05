import { useState } from "react";
import JSONDATA from "./DATATEST.json";

//* css
import "./Activity.css";

//*component
import Input from "../../Component/Input/InputText/InputText";

const Activity = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [Location, setLocation] = useState('');


    const inCheck = () => {
        setLocation(true);
    }
    const outCheck = () => {
        setLocation(false);
    }

    return (
        <section className="section-full row">
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
                    {JSONDATA.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.act.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
                        return (
                            <div className="col-3 mt-15 d-flex justify-center" key={key}>
                                <div className="act-icon text-center">
                                    <img className="pt-15" src={val.icon} alt="" />
                                    <p>{val.act}</p>
                                </div>
                            </div>
                        );
                    })}
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
                        {JSONDATA.filter((val) => {
                            if (Location === true && val.location.includes("in")) {
                                return val;
                            } else if (Location === false && val.location.includes("out")) {
                                return val;
                            }
                        }).map((val, key) => {
                            return (
                                <div className="col-3 text-center mt-15" key={key}>
                                    <div className="act-icon">
                                        <img className="pt-15" src={val.icon} alt="" />
                                        <p>{val.act}</p>
                                    </div>
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