import React from "react"
import FirearmCard from "./FirearmCard"
// this is a "container" component because it renders other components

function Firearms(firearms){
    console.log(firearms)

    const allFirearms = firearms.map(firearm => <FirearmCard /> )

    return(
    <div>
        <h1>My Firearms</h1>
    </div>
    )
    //render firearm cards here, which means it needs access to the data
}

export default Firearms
