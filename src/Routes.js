import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Menu from "./Components/Menu";
import Header from "./Components/Header";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Header} />
                    <Route path="/Menu" component={Menu} />

                </Switch>
            </Router>
        )
    }
}