import './components/assets/styles/style.scss'
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {render} from 'react-dom';
import {HashRouter, Route, Redirect} from "react-router-dom";
import Company from "./components/Company/index";
import Footer from "./components/Footer/index";

render(
    <HashRouter>
        <div className="wrapper">
            <Header />
            <div>
                <Route path="/main" component={Main}/>
                <Route path="/company" component={Company}/>
                <Redirect from="/*" to="/main"/>
            </div>
            <Footer/>
        </div>
    </HashRouter>,
    document.getElementById('root')
);