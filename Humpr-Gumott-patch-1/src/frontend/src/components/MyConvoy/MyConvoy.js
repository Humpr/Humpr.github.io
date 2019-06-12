import React, { Component } from "react";
import style from "./MyConvoy.module.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

class MyConvoy extends Component {
    render() {
        return (
            <div>
                <div className={style.headline}>My Convoy</div>
                <div className={this.props.className || style.convoyList}>
                    <ProfileIcon
                        containerClassName={style.convoyProfileContainer}
                        className={[style.convoyProfile, style.online].join(" ")}
                    />
                    <ProfileIcon
                        containerClassName={style.convoyProfileContainer}
                        className={[style.convoyProfile, style.online].join(" ")}
                    />
                    <ProfileIcon
                        containerClassName={style.convoyProfileContainer}
                        className={[style.convoyProfile, style.online].join(" ")}
                    />
                    <ProfileIcon
                        containerClassName={style.convoyProfileContainer}
                        className={[style.convoyProfile, style.online].join(" ")}
                    />
                    <ProfileIcon
                        containerClassName={style.convoyProfileContainer}
                        className={[style.convoyProfile, style.away].join(" ")}
                    />
                    <ProfileIcon
                        containerClassName={style.convoyProfileContainer}
                        className={[style.convoyProfile, style.busy].join(" ")}
                    />
                </div>
            </div>
        );
    }
}

export default MyConvoy;