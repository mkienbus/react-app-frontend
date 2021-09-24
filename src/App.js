import './App.css';
import React from "react"
import Firearms from './Firearms';
import FirearmForm from './FirearmForm';
import {useEffect, useState} from "react"

function App() {

  const [firearms, setFirearms] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/firearms')
      .then(r => r.json())
      .then(firearmData => setFirearms(firearmData))
    },
  []
  )


  return (
    <div className = "App">
      <Firearms firearms = {firearms}/>
      <FirearmForm /> 
    </div>
  );
  
}

export default App;


//App.js render a firearm container component and new firearm form component (for POSTing)
      //firearmscomponent would render firearm cards
  //nav component

  //which component should handle fetch to get data
    //app component
  //which components should have state? 
    //-form -toys "container" component
    // app component

    //have state for child components live in app component and have app handle fetching data