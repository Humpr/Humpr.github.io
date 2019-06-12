import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import FollowingPage from "./FollowingPage/FollowingPage";
import "./App.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <Main>
                    <Switch>
                        <Route exact path="/" render={() => {
                            // make /following the default landing page
                            return <Redirect to="/following" />
                        }} />
                        <Route path="/following" component={FollowingPage} />
                    </Switch>
                </Main>
            </React.Fragment>
        );
    }
}

export default App;
