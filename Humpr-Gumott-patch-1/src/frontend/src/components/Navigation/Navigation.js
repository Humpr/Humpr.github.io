import React, { Component } from "react";
import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav className={style.navigation}>
                <NavLink className={style.link} activeClassName={style.active} to="/following">Following</NavLink>
                <NavLink className={style.link} activeClassName={style.active} to="/trending">Trending</NavLink>
                <NavLink className={style.link} activeClassName={style.active} to="/recommended">Recommended</NavLink>
            </nav>
        );
    }
}

export default Navigation;