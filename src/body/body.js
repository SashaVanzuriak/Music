import React from "react";
import "./body.css";
import daft from "./daft.jpg";
import { Icon } from "evergreen-ui";

class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "NonClick" };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState((state) => ({ name: "DaftPunkImg" }));
    if (this.state.name == "DaftPunkImg") {
      this.setState((state) => ({ name: "NonClick" }));
    }
  };

  render() {
    return (
      <div>
        <img src={daft} className={this.state.name} onClick={this.toggle}></img>
        <Icon icon="play" size={80} />
      </div>
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
