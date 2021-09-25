import React from "react"

function FirearmForm(){

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target)
    }


    return(
    <div>
        <form onSubmit = {handleSubmit}>
            <label>Firearm:
                <input id = "make" type = "text" defaultValue = "Make"/>
                <input id = "model" type = "text" defaultValue = "Model"/>
            </label>
        <br></br>
            <label>Picture:</label>
                <input id = "picture" type = "text" defaultValue = "Upload picture"/>
                <input type = "submit" value = "Add a new firearm"/>
        </form>
    </div>
    )

    //add event listener on form elements so default text goes away onClick
    //make form controlled
    //data from FirearmForm needs to go up the tree to update setFirearms in App component
}

export default FirearmForm