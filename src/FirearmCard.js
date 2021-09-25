import React from "react"

function FirearmCard({firearm}){
    return(
        <div>
            <h3>{firearm.name}</h3>
            <h3>{firearm.image}</h3>
            <h4>Likes: {firearm.likes}</h4>
        </div>
    )
    //turn "likes" into a "number owned"? or "shot before"?
}

export default FirearmCard;