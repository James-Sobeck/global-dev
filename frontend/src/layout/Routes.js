import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./module/Login";
import ModMenu from "./module/ModMenu";
import Register from "./module/Register";
import PreQuiz from "./module/PreQuiz";
import PostQuiz from "./module/PostQuiz";
import Video from "./module/Video";
import Survey from "./module/Survey";



export default function Routes(){
    return(
        <Switch>
            <Route exact={true} path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/module1">
                <ModMenu/>
            </Route>
            <Route path="/module1_pre">
                <PreQuiz/>
            </Route>
            <Route path="/module1_video">
                <Video id="BaBhJOYa5K8"/>
            </Route>
            <Route path="/module1_post">
                <PostQuiz/>
            </Route>
        </Switch>
    )
}