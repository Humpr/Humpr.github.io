import React, { Component } from "react";
import style from "./Stories.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

class Stories extends Component {
    render() {
        return (
            <div className={this.props.className || style.storiesList}>
                <ProfileIcon
                    containerClassName={style.storiesProfileContainer}
                    className={[style.storiesProfile, style.storieAvailable].join(" ")}
                />
                <ProfileIcon
                    containerClassName={style.storiesProfileContainer}
                    className={[style.storiesProfile, style.storieAvailable].join(" ")}
                />
                <ProfileIcon
                    containerClassName={style.storiesProfileContainer}
                    className={[style.storiesProfile, style.storieAvailable].join(" ")}
                />
                <ProfileIcon
                    containerClassName={style.storiesProfileContainer}
                    className={[style.storiesProfile, style.storieAvailable].join(" ")}
                />
                <ProfileIcon
                    containerClassName={style.storiesProfileContainer}
                    className={[style.storiesProfile, style.storieUnavailable].join(" ")}
                />
                <ProfileIcon
                    containerClassName={style.storiesProfileContainer}
                    className={[style.storiesProfile, style.storieUnavailable].join(" ")}
                />
            </div>
        );
    }
}

export default Stories;