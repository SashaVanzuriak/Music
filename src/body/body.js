import React from "react";
import "./body.css";
import daft from "./daft.jpg";
import { PresetColorTypes } from "antd/lib/_util/colors";

class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "hello" };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState((state) => ({ name: "DaftPunkImg" }));
  };

  render() {
    return (
      <img src={daft} className={this.state.name} onClick={this.toggle}></img>
    );
  }
}

export function BodySite() {
  return (
    <div className="BodySite">
      <p className="DaftPunkText">Daft Punk</p>
      <Cycle />
    </div>
  );
}
