import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes,Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultRoutes  from "./Routes/DefaultRoute";

function App() {
    return(
      <DefaultRoutes></DefaultRoutes>
    )
}
export default App;