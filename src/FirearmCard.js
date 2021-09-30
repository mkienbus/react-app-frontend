import React from "react"
import { Link } from "react-router-dom";


function FirearmCard({firearm, handleClick}){
    return(
        <div>
            {/* <a href = {`/firearms/${firearm.id}`} onClick={()=> handleClick(firearm)}>{firearm.name}</a> */}
            <Link to={
                {
                    pathname:`/firearms/${firearm.id}`,
                    search: `?name=${firearm.name}&description=${firearm.description}`
                }} > {firearm.name} </Link>
        </div>
    )
}

export default FirearmCard;