import React, { Component } from "react";
import { Route } from "react-router-dom";
import style from "./Header.module.css";

import Searchbar from "../Searchbar/Searchbar";
import UploadButton from "../UploadButton/UploadButton";
import Navigation from "../Navigation/Navigation";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import LocationIndicator from "../LocationIndicator/LocationIndicator";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className={style.header}>
                    <h1 className={style.logo}>HUMPR</h1>
                    <Searchbar />
                    <UploadButton />
                    <Navigation />
                    <ProfileIcon />
                </header>
                <Route path="/:a" component={LocationIndicator}/>
            </React.Fragment>
        );
    }
}

export default Header;