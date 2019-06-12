import React, { Component } from "react";
import style from "./Main.module.css";

class Main extends Component {
    render() {
        return (
            <div className={style.main}>
                {this.props.children}
            </div>
        );
    }
}

export default Main;