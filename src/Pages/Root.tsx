import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { PagesHome } from "./Home";

export function Root(){
    
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PagesHome/>}/>
            </Routes>
        </Router>
    )
}