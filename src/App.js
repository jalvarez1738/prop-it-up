import logo from './logo.svg';
import './App.css';
import PropItUp from "./components/PropItUp";


function App() {
  return (
    <div className="App">
      <fieldset>
        <legend>PuttingItTogether.jsx</legend>
        <PropItUp firstName="Jim" lastName="Jones" age={44} hairColor="black"/>
        <PropItUp firstName="Cam" lastName="'ron" age={43} hairColor="blonde"/>
        <PropItUp firstName="JUelz" lastName="Santana" age={42} hairColor="brown"/>
      </fieldset>
    </div>
  );
}

export default App;
