import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './pages/main';
import LoadingSplash from "./components/loading-splash/loading-splash";
import HeaderNav from "./components/nav/nav";

function App() {
    return (
        <div className="App">
            <React.Suspense fallback={<LoadingSplash/>}>
                {/*<HeaderNav />*/}
                <div className="main-contents">
                    <Main />
                </div>
            </React.Suspense>
        </div>
    );
}

export default App;
