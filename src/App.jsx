import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Biden from "./components/Biden";
import Trump from "./components/Trump";

function App(props) {
  return (
    <div className="container-fluid h-100 w-100 p-0">
      <div className="row h-100 no-gutters">
        <Trump />
        <div className="col-sm-1 bg-danger d-flex flex-column justify-content-center align-items-end">
          <h1>V.</h1>
        </div>
        <div className="col-sm-1 bg-primary d-flex flex-column justify-content-center align-items-start">
          <h1>S.</h1>
        </div>
        <Biden />
      </div>
    </div>
  );
}

export default App;
