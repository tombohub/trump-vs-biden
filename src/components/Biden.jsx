import React, { useState } from "react";
import bidenImage from "../images/biden.png";

function Biden(props) {
  return (
    <div className="col-sm-5 text-center bg-primary">
      <h1 className="mt-3">Biden</h1>
      <img className="head" src={bidenImage} alt="" />
      <h1 className="mt-3">269</h1>
    </div>
  );
}

export default Biden;
