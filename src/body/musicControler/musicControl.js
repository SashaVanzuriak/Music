import React from "react";
import "./musicControl.css";
import daft from "./daft.jpg";
import { Icon } from "evergreen-ui";
import GetLucky from "./GetLucky.mp3";
import InstantCrush from "./InstantCrush.mp3";
import OneMoreTime from "./OneMoreTime.mp3";
import AroundTheWorld from "./AroundTheWorld.mp3";
// import uses things

let question = "";
// add new sting next in class add music
let delet = "";
// add new string next  stop music or return play music

export class Cycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cycleStyle: styles.stopCycleAnimation,
      iconName: "play",
      audioPlay: "autoPlay",
      srcMusic: "",
      music: GetLucky,
      header: "Get Lucky",
      colorStyle: "",
      classMusicName: "nameMusic",
    };
    this.element = [styles.colorEditor, "", "", ""];
    this.toggle = this.toggle.bind(this);
    // add states and bind and change in future
  }

  next = () => {
    if (this.state.music === GetLucky) {
      this.setState((state) => ({
        header: "Insrant Crush",
        music: InstantCrush,
        classMusicName: "InstantCrushMusic",
      }));
      this.element[0] = "";
      this.element[1] = styles.colorEditor;
    } else if (this.state.music === InstantCrush) {
      this.setState((state) => ({
        header: "One More Time",
        music: OneMoreTime,
        classMusicName: "OneMoreTimeMusic",
      }));
      this.element[1] = "";
      this.element[2] = styles.colorEditor;
    } else if (this.state.music === OneMoreTime) {
      this.setState((state) => ({
        header: "Around the World",
        music: AroundTheWorld,
        classMusicName: "AroundTheWorldMusic",
      }));
      this.element[2] = "";
      this.element[3] = styles.colorEditor;
    }

    if (this.state.cycleStyle === styles.cycleAnimation) {
      delet = document.querySelector(".audio");
      this.setState((state) => ({
        cycleStyle: styles.stopCycleAnimation,
        iconName: "play",
        audioPlay: "false",
      }));
      delet.pause();
      //if button clack this code change to origin style
    }
  };

  back = () => {
    if (this.state.music === InstantCrush) {
      this.setState((state) => ({
        header: "Get Lucky",
        music: GetLucky,
        classMusicName: "nameMusic",
      }));
      this.element[1] = "";
      this.element[0] = styles.colorEditor;
    } else if (this.state.music === OneMoreTime) {
      this.setState((state) => ({
        header: "Instant Crush",
        music: InstantCrush,
        classMusicName: "InstantCrushMusic",
      }));
      this.element[2] = "";
      this.element[1] = styles.colorEditor;
    } else if (this.state.music === AroundTheWorld) {
      this.setState((state) => ({
        header: "One More Time",
        music: OneMoreTime,
        classMusicName: "OneMoreTimeMusic",
      }));
      this.element[3] = "";
      this.element[2] = styles.colorEditor;
    }

    if (this.state.cycleStyle === styles.cycleAnimation) {
      delet = document.querySelector(".audio");
      this.setState((state) => ({
        cycleStyle: styles.stopCycleAnimation,
        iconName: "play",
        audioPlay: "false",
      }));
      delet.pause();
      //if button clack this code change to origin style
    }
  };

  toggle = () => {
    question = "";
    this.setState((state) => ({
      cycleStyle: styles.cycleAnimation,
      iconName: "pause",
      audioPlay: "false",
      srcMusic: { GetLucky },
    }));
    if (delet === document.querySelector(".audio")) {
      delet.play();
      // if delet = true this return music to play
    }
    if (this.state.cycleStyle === styles.cycleAnimation) {
      delet = document.querySelector(".audio");
      this.setState((state) => ({
        cycleStyle: styles.stopCycleAnimation,
        iconName: "play",
        audioPlay: "false",
      }));
      delet.pause();
      //if button clack this code change to origin style
    }
    question = (
      <audio
        className="audio"
        autoPlay
        src={this.state.music}
        loop="true"
        hidden="true"
      />
    );
    // add music if you onClick on Icon
  };
  //Icon onClick() start this code

  render() {
    return (
      <div>
        <img
          src={daft}
          className="DaftPunkImg"
          style={this.state.cycleStyle}
        ></img>
        <Icon
          id="yes"
          icon={this.state.iconName}
          className="IconStop"
          size={80}
          onClick={this.toggle}
        />
        <div className="TextDiv">
          <p className={this.state.classMusicName}>{this.state.header}</p>
          <div className="textDiv">
            <p className="musicText">
              "Get Lucky" is a song by French electronic music duo Daft Punk,
              featuring vocals by Pharrell Williams and co-written by the duo,
              Williams, and Nile Rodgers. It is the lead single from Daft Punk's
              fourth studio album, Random Access Memories.Before its release as
              a single, "Get Lucky" was featured in television advertisements
              broadcast during Saturday Night Live, after which Rodgers and
              Williams announced their involvement in the track.Small excerpts
              also appear throughout the promotional video series The
              Collaborators.
            </p>
          </div>
        </div>
        <div id="music">{question}</div>
        <div className="chevrons">
          <Icon
            className="nextMusicIcon"
            onClick={this.next.bind(this)}
            icon="chevron-right"
            size={60}
          />
          <Icon
            onClick={this.back.bind(this)}
            className="backMusicIcon"
            icon="chevron-left"
            size={60}
          />
        </div>
        <div>
          <Icon style={this.element[0]} id="oneDot" icon="dot" size={40} />
          <Icon style={this.element[1]} id="twoDot" icon="dot" size={40} />
          <Icon style={this.element[2]} id="treeDot" icon="dot" size={40} />
          <Icon style={this.element[3]} id="fourDot" icon="dot" size={40} />
        </div>
      </div>
    );
  }
}
// add class and export it in the next file

const styles = {
  cycleAnimation: {},
  stopCycleAnimation: {
    animationPlayState: "paused",
  },
  colorEditor: {
    color: "white",
  },
};
// add style this style help img don't moving
