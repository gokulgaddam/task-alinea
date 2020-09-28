import React from "react";
import cover from "../video/cover.mp4";
import "./Cover.css";
function Cover() {
  return (
    <video autoPlay loop muted className="video">
      <source src={cover}></source>
    </video>
  );
}

export default Cover;
