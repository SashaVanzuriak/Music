import React from "react";
import "./musicControl.css";
import daft from "./daft.jpg";
import { Icon, RedoIcon } from "evergreen-ui";
import GetLucky from "./GetLucky.mp3";

export class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "DaftPunkImg",
      cycleStyle: styles.stopCycleAnimation,
      iconName: "play",
      audioPlay: "",
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState((state) => ({
      cycleStyle: styles.cycleAnimation,
      iconName: "pause",
      audioPlay: "pause",
    }));
    if (this.state.cycleStyle == styles.cycleAnimation) {
      this.setState((state) => ({
        cycleStyle: styles.stopCycleAnimation,
        iconName: "play",
        audioPlay: "",
      }));
    }
  };

  render() {
    return (
      <div>
        <img
          src={daft}
          className={this.state.name}
          style={this.state.cycleStyle}
        ></img>
        <Icon
          icon={this.state.iconName}
          className="IconStop"
          size={80}
          onClick={this.toggle}
        />
        <audio
          src={GetLucky}
          onplay="play"
          autoPlay={this.state.audioPlay}
        ></audio>
      </div>
    );
  }
}

const styles = {
  cycleAnimation: {},
  stopCycleAnimation: {
    animationPlayState: "paused",
  },
};
