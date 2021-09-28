import React from "react"


function FirearmCard({firearm}){
    return(
        <div>
            <h3>{firearm.name}</h3>
        </div>
    )
    //add NavLink to each firearm to click to a "more info"
}

export default FirearmCard;