import React from "react";
import "./musicControl.css";
import daft from "./daft.jpg";
import { Icon } from "evergreen-ui";
import GetLucky from "./GetLucky.mp3";

export class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "NonClick", iconName: "play", audioPlay: "pause" };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState((state) => ({
      name: "DaftPunkImg",
      iconName: "pause",
      audioPlay: "play",
    }));
    if (this.state.name == "DaftPunkImg") {
      this.setState((state) => ({
        name: "NonClick",
        iconName: "play",
        audioPlay: "",
      }));
    }
  };

  render() {
    return (
      <div>
        <img src={daft} className={this.state.name}></img>
        <Icon icon={this.state.iconName} size={80} onClick={this.toggle} />
        <audio
          src={GetLucky}
          onplay="play"
          autoPlay={this.state.audioPlay}
        ></audio>
      </div>
    );
  }
}
