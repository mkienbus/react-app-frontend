import './App.css';
import React from "react"
import Firearms from './Firearms';
import FirearmForm from './FirearmForm';
import Nav from "./Nav"
import Home from "./Home"
import FirearmShow from "./FirearmShow"
import {useEffect, useState} from "react"
import {Route, Switch} from "react-router-dom"


function App() {

  const [firearms, setFirearms] = useState([]);
  const [firearm, setFirearm] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/firearms')
      .then(r => r.json())
      .then(firearmData => setFirearms(firearmData))
    },[])


  function newFirearm(newFirearm){
    setFirearms([...firearms, newFirearm])
  }


  return (
    <div className = "App">
      <Nav/>
      <Switch>
        <Route exact path = "/firearms">
          <Firearms firearms = {firearms}/>
        </Route>
        <Route exact path = "/firearms/new">
          <FirearmForm newFirearm = {newFirearm}/> 
        </Route>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/firearms/:id">
          <FirearmShow/>
        </Route>
      </Switch>
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