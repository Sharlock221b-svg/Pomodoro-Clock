import './App.css';
import React from "react"
import Break from './Components/Break';
import Session from './Components/Session';
import Clock from './Components/Clock';

function App() {
  const [bl,setBl] = React.useState(5);
  const [sl,setSl] = React.useState(25);
  const [session,setSession] = React.useState(true);
  const [run,setRun] = React.useState(false);

  function incBl(){
    if(bl === 60){
      return;
    }
    setBl((bl) => bl+1);
  }
  function decBl(){
    if(bl === 1){
      return;
    }
    setBl((bl) => bl-1);
  }

  function incSl(){
    if(sl === 60){
      return;
    }
    setSl((sl) => sl+1);
  }
  function decSl(){
    if(sl === 1){
      return;
    }
    setSl((sl) => sl-1);
  }

  function reset(){
    setBl(5);
    setSl(25);
  }

 

  return (
    <div className="App">
      <div className="head">
        <h2>25 + 5 Clock</h2>
      </div>
      <Break bl={bl} inc={incBl} dec={decBl}/>
      <Session sl={sl} inc={incSl} dec={decSl}/>
      <Clock reset={reset} session={session} sl={sl} bl={bl}/>
    </div>
  );
}

export default App;
