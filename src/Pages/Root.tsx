import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { PagesHome } from "./Home";
import { PagesForm } from "./Form"

export function Root(){
    
    return(
        <Router>
            <Routes>
                <Route path="/edit/:id" element={<PagesForm/>}/>
                <Route path="/" element={<PagesHome/>}/>
            </Routes>
        </Router>
    )
}