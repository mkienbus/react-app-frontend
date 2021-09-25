import React from "react"

function FirearmForm(){
    return(
    <div>
        <h3>Add a new firearm</h3>
        <form>
            <label>Firearm:</label>
            <input type = "text" defaultValue = "Make"></input>
            <input type = "text" defaultValue = "Model"></input>
            <input type = "submit"></input>
        </form>
    </div>
    )
    //e.preventDefault() ?
}

export default FirearmForm