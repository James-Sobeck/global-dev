import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./module/Login";



export default function Routes(){
    return(
        <Switch>
            <Route exact={true} path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
        </Switch>
    )
}