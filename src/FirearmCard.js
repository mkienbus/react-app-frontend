import React from "react"
import { Link } from "react-router-dom";
import FirearmShow from "./FirearmShow";



function FirearmCard({firearm}){
    return(
        <div>
            <Link to={`/firearms/${firearm.id}`} component={FirearmShow(firearm)}>{firearm.name}</Link>
        </div>
    )
    //add NavLink to each firearm to click to a "more info"
}

export default FirearmCard;