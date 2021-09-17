import logo from './logo.svg';
import './App.css';
import React from "react"
import FirearmContainer from './FirearmContainer';
import FirearmForm from './FirearmForm';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <FirearmContainer />
      <FirearmForm /> 
    </div>
  );
  //App.js render a firearm container component and new firearm form component (for POSTing)
      //firearm container component would render firearm cards
  //nav component? about component?
}

export default App;
