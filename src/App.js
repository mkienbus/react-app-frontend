import './App.css';
import React from "react"
import Firearms from './Firearms';
import FirearmForm from './FirearmForm';
import Nav from "./Nav"
import Home from "./Home"
import ClickMe from "./ClickMe"
import FirearmShow from "./FirearmShow"
import {useEffect, useState} from "react"
import {Route, Switch} from "react-router-dom"


function App() {

  const [firearms, setFirearms] = useState([]);
  //const [firearm, setFirearm] = useState("");
  //let firearm = {}
  
  useEffect(()=>{
    fetch('http://localhost:3000/firearms')
      .then(r => r.json())
      .then(firearmData => setFirearms(firearmData))
    },[])


  function newFirearm(newFirearm){
    setFirearms([...firearms, newFirearm])
  }

  function handleClick(detailFirearm) {
  }


  return (
    <div className = "App">
      <Nav/>
      {/* removed ClickMe as isn't part of original application */}
      {/* <ClickMe /> */}
      <Switch>
        <Route exact path = "/firearms">
          <Firearms firearms = {firearms} handleClick = {handleClick}/>
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