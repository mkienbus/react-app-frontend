import React from "react"
import {NavLink} from "react-router-dom"

function Nav(){
    return(
        <div>
            <h2>Navigation Bar</h2>
            <NavLink style = {{marginRight: "10px"}} to = "/">Home</NavLink>
            <NavLink style = {{marginRight: "10px"}} to = "/firearms">Firearms List</NavLink>
            <NavLink style = {{marginRight: "10px"}} to = "/firearms/new">Add a Firearm to List</NavLink>
        </div>
    )
}

export default Nav