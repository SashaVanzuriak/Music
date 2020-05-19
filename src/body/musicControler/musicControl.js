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
      audioPlay: "AutoPlay",
    }));
    if (this.state.cycleStyle == styles.cycleAnimation) {
      this.setState((state) => ({
        cycleStyle: styles.stopCycleAnimation,
        iconName: "play",
        audioPlay: "play",
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
        <div id="music">
          <audio onPlaying="play" src={GetLucky}></audio>
        </div>
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
