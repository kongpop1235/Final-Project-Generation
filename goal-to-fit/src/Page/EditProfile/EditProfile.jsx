import React from "react";
import { useNavigate } from "react-router-dom";


// * css
import "./EditProfile.css";

// * component
import Label from "../../Component/Input/LabelText/LabelText";
import InputText from "../../Component/Input/InputText/InputText";
import InputRadio from "../../Component/Input/InputRadio/InputRadio";
import InputDate from "../../Component/Input/InputDate/InputDate";

const EditProfile = () => {
    const navigate = useNavigate();

    return (
        <section className="section-700 d-flex align-center text-primary">
            <div className="container" style={{}}>
                <h1 className="text-center mb-24">Username</h1>
                <form className="row space-between d-flex">
                    <div className="col-4-md col-12-xl">
                        <div className="mb-15 font-700">
                            <Label>Gender</Label>
                        </div>
                        <InputRadio value1={"male"} value2={"female"}></InputRadio>
                    </div>
                    <div className="col-4-md col-6-xl">
                        <div className="mb-15 font-700">
                            <Label>Birth Year</Label>
                        </div>
                        <InputDate></InputDate>
                    </div>
                    <div className="col-4-md col-6-xl">
                        <div className="mb-15 font-700">
                            <Label>Height</Label>
                        </div>
                        <InputText className="input-profile text-primary text-center"></InputText>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EditProfile;