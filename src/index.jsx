import './components/assets/styles/style.scss'
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {render} from 'react-dom';
import {HashRouter, Route, Redirect} from "react-router-dom";
import ICO from "./components/ICO/index";

render(
    <HashRouter>
        <div className="wrapper">
            <Header />
            <div>
                <Route path="/main" component={Main}/>
                <Route path="/ico" component={ICO}/>
                <Redirect from="/*" to="/main"/>
            </div>
        </div>
    </HashRouter>,
    document.getElementById('root')
);