import React, { useState }  from "react";
import './index.css';
import Game from './functionalComponents/game';
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from './App'


var ReactDOM = require('react-dom/client');
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />); // this is used to render Game Component from function
root.render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        <HashRouter>
            <App />
        </HashRouter>
        {/* </BrowserRouter> */}
    </React.StrictMode>
)