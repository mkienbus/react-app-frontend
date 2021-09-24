import './App.css';
//import React from "react"
import Firearms from './Firearms';
import FirearmForm from './FirearmForm';

//render App on localhost 3001 in CLI "PORT=3001 npm start" for front end and backend on localhost 3000 (default)


function App() {

  fetch('http://localhost:3000/firearms')
    .then(r => r.json())
    .then(data => console.log(data))


  return (
    <div className = "App">
      <Firearms/>
      <FirearmForm /> 
    </div>
  );
  //App.js render a firearm container component and new firearm form component (for POSTing)
      //firearmscomponent would render firearm cards
  //nav component

  //which component should handle fetch to get data
    //app component
  //which components should have state? 
    //-form -toys "container" component
    // app component

    //have state for child components live in app component and have app handle fetching data
}

export default App;
