import React, { Component } from "react";
import style from "./UploadButton.module.css";

class UploadButton extends Component {
    render() {
        return (
            <div className={style.container}>
                <label className={style.label} htmlFor="uploadButton"></label>
                <input className={style.input} name="uploadButton" id="uploadButton" type="file"/>
            </div>
        );
    }
}

export default UploadButton;