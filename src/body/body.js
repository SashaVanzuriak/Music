import React from "react";
import "./body.css";
import { Cycle } from "./musicControler/musicControl.js";

export function BodySite() {
  return (
    <div className="BodySite">
      <p className="DaftPunkText">Daft Punk</p>
      <Cycle />
    </div>
  );
}
