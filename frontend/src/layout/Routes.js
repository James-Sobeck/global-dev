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
import VideoPage from "./module/VideoPage";

import PreQuiz1 from "./module/mod1/PreQuiz1";
import PostQuiz1 from "./module/mod1/PostQuiz1";
import VideoPage1 from "./module/mod1/VideoPage1";

import PreQuiz2 from "./module/mod2/PreQuiz2";
import PostQuiz2 from "./module/mod2/PostQuiz2";
import VideoPage2 from "./module/mod2/VideoPage2";

import PreQuiz3 from "./module/mod3/PreQuiz3";
import PostQuiz3 from "./module/mod3/PostQuiz3";
import VideoPage3 from "./module/mod3/VideoPage3";

import PreQuiz4 from "./module/mod4/PreQuiz4";
import PostQuiz4 from "./module/mod4/PostQuiz4";
import VideoPage4 from "./module/mod4/VideoPage4";

import PreQuiz5 from "./module/mod5/PreQuiz5";
import PostQuiz5 from "./module/mod5/PostQuiz5";
import VideoPage5 from "./module/mod5/VideoPage5";
import Demo from "./module/Demo";


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
            <Route path="/modules">
                <ModMenu/>
            </Route>
            <Route path="/module1_post">
                <PostQuiz1/>
            </Route>
            <Route path="/module1_pre">
                <PreQuiz1/>
            </Route>
            <Route path="/module1_video">
                <VideoPage1/>
            </Route>
            <Route path="/module2_post">
                <PostQuiz2/>
            </Route>
            <Route path="/module2_pre">
                <PreQuiz2/>
            </Route>
            <Route path="/module2_video">
                <VideoPage2/>
            </Route>
            <Route path="/module3_post">
                <PostQuiz3/>
            </Route>
            <Route path="/module3_pre">
                <PreQuiz3/>
            </Route>
            <Route path="/module3_video">
                <VideoPage3/>
            </Route>
            <Route path="/module4_post">
                <PostQuiz4/>
            </Route>
            <Route path="/module4_pre">
                <PreQuiz4/>
            </Route>
            <Route path="/module4_video">
                <VideoPage4/>
            </Route>
            <Route path="/module5_post">
                <PostQuiz5/>
            </Route>
            <Route path="/module5_pre">
                <PreQuiz5/>
            </Route>
            <Route path="/module5_video">
                <VideoPage5/>
            </Route>
            <Route path="/user_survey"> 
                <Survey/>
            </Route>
            <Route path="/user_demo">
                <Demo/>
            </Route>
        </Switch>
    )
}