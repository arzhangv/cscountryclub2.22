import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";

import Page from "./components/Page";

import calabasas_country_club from "./assets/img.png";
import Companies from "./components/Companies";
import Home from "./components/Home";
import Apply from "./components/Apply";
function App() {
  return (
    <>
        <Router>

            <Routes>
                <Route path="/" element={<Page/>}></Route>
                <Route path="/apply" element={<Apply/>}></Route>
            </Routes>

        </Router>
    </>
  );
}

export default App;
