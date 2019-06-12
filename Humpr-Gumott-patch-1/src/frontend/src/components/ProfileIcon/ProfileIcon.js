import React, { Component } from "react";
import style from "./ProfileIcon.module.css";
//import placeholder from "./placeholder_400x400.jpg";

class ProfileIcon extends Component {
    render() {
        return (
            <div className={this.props.containerClassName || ""}>
                <img className={this.props.className || style.img} alt="" src="https://picsum.photos/100/?random"/>
            </div>
        );
    }
}

export default ProfileIcon;