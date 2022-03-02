import './App.css';
import React from "react"
import Break from './Components/Break';

function App() {
  const [bl,setBl] = React.useState(5);
  const [sl,setSl] = React.useState(25);

  function incBl(){
    setBl((bl) => bl+1);
  }
  function decBl(){
    setBl((bl) => bl-1);
  }


  return (
    <div className="App">
      <div className="head">
        <h2>25 + 5 Clock</h2>
      </div>
      <Break bl={bl} inc={incBl} dec={decBl}/>
    </div>
  );
}

export default App;
