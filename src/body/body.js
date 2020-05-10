import React from "react";
import "./body.css";
import daft from "./daft.jpeg";

export function BodySite() {
  return (
    <div className="BodySite">
      <p className="DaftPunkText">Daft Punk</p>
      <img src={daft} className="DaftPunkImg"></img>
    </div>
  );
}
