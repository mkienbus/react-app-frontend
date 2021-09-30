import React from "react"


function FirearmCard({firearm, handleClick}){
    return(
        <div>
            <a href = {`/firearms/${firearm.id}`} onClick={()=> handleClick(firearm)}>{firearm.name}</a>
        </div>
    )
    //add NavLink to each firearm to click to a "more info"
}

export default FirearmCard;