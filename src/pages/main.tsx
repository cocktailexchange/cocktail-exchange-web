import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";

import {APP_URLS} from "../util/urls";

import PageNotFound from './404/page-not-found'
import Home from "./home/home";
import Techniques from "./techniques/techniques";

function Main() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path={APP_URLS.techniques} element={<Techniques/>} />
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
}

export default Main;
