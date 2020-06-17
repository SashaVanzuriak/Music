import React from "react";
import "./musicControl.css";
import { Icon } from "evergreen-ui";

import GetLucky from "./GetLucky.mp3";
import GetLuckyImg from "./GetLucky.jpg";

import InstantCrush from "./InstantCrush.mp3";
import InstantCrushImg from "./InstantCrush.jpeg";

import OneMoreTime from "./OneMoreTime.mp3";
import OneMoreTimeImg from "./OneMoreTime.jpg";

import HarderBetterStronger from "./HarderBetterStronger.mp3";
import HarderBetterStrongerImg from "./HarderBetterStronger.jpg";
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
      iconChange: GetLuckyImg,
      music: GetLucky,
      header: "Get Lucky",
      colorStyle: "",
      classMusicName: "nameMusic",
      visibility: styles.hidden,
      nextvisibility: styles.nonHiden,
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
        iconChange: InstantCrushImg,
        visibility: styles.nonHiden,
      }));
      this.element[0] = "";
      this.element[1] = styles.colorEditor;
    } else if (this.state.music === InstantCrush) {
      this.setState((state) => ({
        header: "One More Time",
        music: OneMoreTime,
        classMusicName: "OneMoreTimeMusic",
        iconChange: OneMoreTimeImg,
      }));
      this.element[1] = "";
      this.element[2] = styles.colorEditor;
    } else if (this.state.music === OneMoreTime) {
      this.setState((state) => ({
        header: "Harder Better Faster Stronger",
        music: HarderBetterStronger,
        classMusicName: "HarderBetterFasterStronger",
        iconChange: HarderBetterStrongerImg,
        nextvisibility: styles.hidden,
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
        iconChange: GetLuckyImg,
        visibility: styles.hidden,
      }));
      this.element[1] = "";
      this.element[0] = styles.colorEditor;
      //if this music is Instant Crush and change it to GetLucky
    } else if (this.state.music === OneMoreTime) {
      this.setState((state) => ({
        header: "Instant Crush",
        music: InstantCrush,
        classMusicName: "InstantCrushMusic",
        iconChange: InstantCrushImg,
      }));
      this.element[2] = "";
      this.element[1] = styles.colorEditor;
      //if this music is One More Time and change it to Instant Crush
    } else if (this.state.music === HarderBetterStronger) {
      this.setState((state) => ({
        header: "One More Time",
        music: OneMoreTime,
        classMusicName: "OneMoreTimeMusic",
        iconChange: OneMoreTimeImg,
        nextvisibility: styles.nonHiden,
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
          src={this.state.iconChange}
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
            style={this.state.nextvisibility}
            size={60}
          />
          <Icon
            onClick={this.back.bind(this)}
            className="backMusicIcon"
            style={this.state.visibility}
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
    color: "gray",
  },
  hidden: {
    visibility: "hidden",
  },
  nonHiden: {
    visibility: "visible",
  },
};
// add style this style help img don't moving
