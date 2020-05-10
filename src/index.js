import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header } from "./header/header.js";
import { BodySite } from "./body/body.js";

function All() {
  return (
    <div>
      <Header />
      <BodySite />
    </div>
  );
}

ReactDOM.render(<All />, document.body);
