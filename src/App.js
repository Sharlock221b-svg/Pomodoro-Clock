import './App.css';
import react from "react"

function App() {
  const [bl,setBl] = React.useState(5);
  const [sl,setSl] = React.useState(25);

  return (
    <div className="App">
      <div className="head">
        <h2>25 + 5 Clock</h2>
      </div>
    </div>
  );
}

export default App;
