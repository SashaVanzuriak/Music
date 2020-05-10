import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BodySite } from "./body/body.js";

function All() {
  return (
    <div>
      <BodySite />
    </div>
  );
}

ReactDOM.render(<All />, document.body);
