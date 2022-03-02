import React from "react";
import start from "../images/start.svg";
import pause from "../images/pause.svg";
import Restart from "../images/Restart.svg";

export default function Clock(props) {

  const [timeStamp,setTimeStamp] = React.useState("25:00")
  const [time,setTime] = React.useState((25*60)-1);

  React.useEffect(() =>{
      if(props.session)
      {
          setTimeStamp(`${props.sl}:00`);
          const ans = props.sl * 60;
          setTime(ans-1);
      }
      else{
          setTimeStamp(`${props.bl}:00`);
          const ans = props.bl * 60;
          setTime(ans-1);
      }
      console.log(timeStamp);
  },[props.sl,props.bl]);

  function handle()
  {
      if(props.session)
      {
           setTime((time) => time-1);
           let mm = Math.floor(time/60);
           let ss = Math.floor(time%60);
           setTimeStamp(`${mm}:${ss}`);
      }
  }

  return (
    <div class="clock">
      <h3 id="timer-label">Session</h3>
      <h1 id="time-left">{timeStamp}</h1>
      <span id="start_stop" onClick={handle} >
        <img src={start}></img>
        <img src={pause}></img>
      </span>
      <img src={Restart} id="reset" onClick={props.reset}></img>
    </div>
  );
}
