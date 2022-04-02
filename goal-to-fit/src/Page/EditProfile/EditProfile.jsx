import React from "react";
import { useNavigate } from "react-router-dom";


// * css
import "./EditProfile.css";

// * component
import Label from "../../Component/Input/LabelText/LabelText";
import InputText from "../../Component/Input/InputText/InputText";
import InputRadio from "../../Component/Input/InputRadio/InputRadio";
import InputDate from "../../Component/Input/InputDate/InputDate";
import CheckBox from "../../Component/Input/CheckBox/CheckBox";
import InputTime from "../../Component/Input/InputTime/InputTime";
import Input from "../../Component/Input/InputText/InputText";

const EditProfile = () => {
    const navigate = useNavigate();
    const saveClick = () => {
        navigate("/Home")
    }
    return (
        <section className="section-700 d-flex align-center text-primary">
            <div className="container" style={{}}>
                <h1 className="text-center mb-24">Username</h1>
                <form className="row space-between">
                    <div className="col-6-md col-3 pr-30">
                        <div className="mb-15 font-700">
                            <Label>Gender</Label>
                        </div>
                        <InputRadio value1={"male"} value2={"female"}></InputRadio>
                    </div>
                    <div className="col-6-md col-3 px-30">
                        <div className="mb-15 font-700">
                            <Label>Birth Year</Label>
                        </div>
                        <InputDate></InputDate>
                    </div>
                    <div className="col-6-md col-3 pr-30">
                        <div className="mb-15 font-700">
                            <Label>Height</Label>
                        </div>
                        <InputText className="input-profile text-primary text-center"></InputText>
                    </div>
                    <div className="col-6-md col-3 pr-30">
                        <div className="mb-15 font-700">
                            <Label>Weight</Label>
                        </div>
                        <InputText className="input-profile text-primary text-center"></InputText>
                    </div>
                    <div className="col-12-md col-4 mt-24">
                        <div className="mb-15 font-700">
                            <Label>Exercise day</Label>
                        </div>
                        <ul id="ui-check" class="tg-list space-between py-auto">
                            <CheckBox dataTg="M" id="mon" className=""></CheckBox>
                            <CheckBox dataTg="TU" id="tue"></CheckBox>
                            <CheckBox dataTg="W" id="wed"></CheckBox>
                            <CheckBox dataTg="TH" id="thu"></CheckBox>
                            <CheckBox dataTg="F" id="fri"></CheckBox>
                            <CheckBox dataTg="SA" id="sat"></CheckBox>
                            <CheckBox dataTg="SU" id="sun"></CheckBox>
                        </ul>
                    </div>
                    <div className="col-md-12 col-4 mt-24">
                        <div className="mb-15 font-700">
                            <Label>Start time</Label>
                        </div>
                        <InputTime></InputTime>
                    </div>
                    <div className="col-12" onClick={saveClick}>
                        <Input type="submit" value="Save" className="btn mt-24 h-40 text-center text-upper space-5"></Input>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EditProfile;