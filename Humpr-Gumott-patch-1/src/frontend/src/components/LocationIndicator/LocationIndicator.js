import React, { Component } from "react";
import style from "./LocationIndicator.module.css";

class LocationIndicator extends Component {
    render() {
        var content = () => {
            switch(this.props.match.url) {
                case "/following":
                    return "Following";
                case "/trending":
                    return "Trending";
                case "/recommended":
                    return "Recommended";
                default:
                    return "";
            }
        }
        var classes = () => {
            switch(this.props.match.url) {
                case "/following":
                    return [style.locationIndicator, style.following].join(" ");
                case "/trending":
                    return [style.locationIndicator, style.trending].join(" ");
                case "/recommended":
                    return [style.locationIndicator, style.recommended].join(" ");
                default:
                    return style.locationIndicator;
            }
        }
        return (
            <div className={classes()}>{content()}</div>
        );
    }
}

export default LocationIndicator;