import React from "react";
import start from "../images/start.svg";
import pause from "../images/pause.svg";
import Restart from "../images/Restart.svg";

export default function Clock(props) {
  const [timeStamp, setTimeStamp] = React.useState("25:00");
  const [time, setTime] = React.useState(25 * 60 - 1);

  React.useEffect(() => {
    if (props.session) {
      if (props.sl < 10) {
        setTimeStamp(`0${props.sl}:00`);
      } else {
        setTimeStamp(`${props.sl}:00`);
      }
      const ans = props.sl * 60;
      setTime(ans - 1);
    }
     else {
      if (props.bl < 10) {
        setTimeStamp(`0${props.bl}:00`);
      } else {
        setTimeStamp(`${props.bl}:00`);
      }
      const ans = props.bl * 60;
      setTime(ans - 1);
    }
    console.log(timeStamp);
  }, [props.sl, props.bl,props.session]);

  function handle() {
    if (props.session) {
      setTime((time) => time - 1);
      let mm = Math.floor(time / 60);
      if (mm < 10) {
        mm = "0" + mm;
      }
      //console.log(mm);
      let ss = Math.floor(time % 60);
      if(ss < 10){
        ss = "0" + ss;
      }
      setTimeStamp(`${mm}:${ss}`);
      if(mm === "00" && ss === "00"){
        props.setSession(!props.session);
        let sound = document.getElementById("beep");
        sound.play();
      }
    }
    else{
      setTime((time) => time - 1);
      let mm = Math.floor(time / 60);
      if (mm < 10) {
        mm = "0" + mm;
      }
      //console.log(mm);
      let ss = Math.floor(time % 60);
      if(ss < 10){
        ss = "0" + ss;
      }
      setTimeStamp(`${mm}:${ss}`);
      if(mm === "00" && ss === "00"){
        props.setSession(!props.session);
        let sound = document.getElementById("beep");
        sound.play();
      }
    }
  }

  let interval;
  React.useEffect(() => {
   // console.log("run");
    if (props.run) {
      interval = setInterval(handle, 1000);
      return () => clearInterval(interval);
    }
  });

  function Run() {
    props.handleRun();
  }

  function Reset(){
    props.reset();
    setTime(25*60-1);
    setTimeStamp("25:00");
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  }

  return (
    <div class="clock">
      <h3 id="timer-label">{props.session ? "Session" : "Break"}</h3>
      <h1 id="time-left">{timeStamp}</h1>
      <span id="start_stop" onClick={Run}>
        <img src={start}></img>
        <img src={pause}></img>
      </span>
      <img src={Restart} id="reset" onClick={Reset}></img>
      <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
    </div>
  );
}
