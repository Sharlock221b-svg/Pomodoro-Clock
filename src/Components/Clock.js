import React from "react";
import start from "../images/start.svg";
import pause from "../images/pause.svg";
import Restart from "../images/Restart.svg";

export default function Clock(props) {
  
  return (
    <div class="clock">
      <h3 id="timer-label">Session</h3>
      <h1 id="time-left">{props.timeLeft}</h1>
      <span id="start_stop" onClick={props.handleOn}>
        <img src={start}></img>
        <img src={pause}></img>
      </span>
      <img src={Restart} id="reset" onClick={props.reset}></img>
    </div>
  );
}
