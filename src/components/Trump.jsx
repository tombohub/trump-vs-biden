import React, { useState } from "react";
import trumpImage from "../images/trump.png";

function Trump(props) {
  return (
    <div className="col-sm-5 text-center bg-danger">
      <h1 className="mt-3">Trump</h1>
      <img className="head" src={trumpImage} alt="" />
      <h1 className="mt-3">119</h1>
    </div>
  );
}

export default Trump;
