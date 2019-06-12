import React, { Component } from "react";
import style from "./Searchbar.module.css";

class Searchbar extends Component {
    render() {
        return (
            <div>
                <input className={style.searchbar} type="text" placeholder="Type a search"/>
            </div>
        );
    }
}

export default Searchbar;