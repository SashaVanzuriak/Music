import React from "react";
import "./musicControl.css";
import daft from "./daft.jpg";
import { Icon } from "evergreen-ui";

export class Cycle extends React.Component {
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
        <img src={daft} className={this.state.name}></img>
        <Icon icon="play" size={80} onClick={this.toggle} />
      </div>
    );
  }
}
