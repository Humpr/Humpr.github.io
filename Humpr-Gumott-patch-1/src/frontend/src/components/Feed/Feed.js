import React, { Component } from "react";
// import style from "./Feed.module.css";
import FollowingCard from "../FollowingCard/FollowingCard";

class Feed extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <FollowingCard />
                <FollowingCard />
                <FollowingCard />
                <FollowingCard />
                <FollowingCard />
            </div>
        );
    }
}

export default Feed;
