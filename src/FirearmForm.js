import React from "react"
import {useState} from "react"

function FirearmForm({newFirearm}){

    const [name, setName] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/firearms',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: name})
        })
        newFirearm({name: name})
        //send POST fetch call from here, using "name" value as defined in state

        

        //newFirearm defined in App component, sends updated name state up to parent App component to trigger re-render

    };

    function handleChange(e){
        setName(e.target.value)
        //handleChange takes e.target.value "name" value and sets it to the state "name value", used in handleSubmit function
        //keeps name state updated with value in use input field
    }


    return(
    <div>
        <form onSubmit = {handleSubmit}>
            <label>
                Firearm:
                    <input id = "firearmInfo" type = "text" value ={name} onChange = {(e) => handleChange(e)}/>
            </label>
                <input type = "submit" value = "Add a new firearm"/>
        </form>
    </div>
    )

    //add event listener on form elements so default text goes away onClick
    //make form controlled
    //data from FirearmForm needs to go up the tree to update setFirearms in App component
}

export default FirearmForm