import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";

import {APP_URLS} from "../util/urls";

import PageNotFound from './404/page-not-found'
import Home from "./home/home";
import Menu from "./menu/menu";
import Techniques from "./techniques/techniques";
import Ingredients from "./ingredients/ingredients";

function Main() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Routes>
            {/*<Route path='/' element={<Home/>} />*/}
            {/*<Route path='/cocktail-exchange-web' element={<Menu/>} />*/}
            {/*<Route path={APP_URLS.techniques} element={<Techniques/>} />*/}
            {/*<Route path={APP_URLS.ingredients} element={<Ingredients/>} />*/}
            <Route path="*" element={<Menu/>}/>
        </Routes>
    );
}

export default Main;
