import React from "react"

function FirearmShow(){
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let name = params.get('name');
    let description = params.get('description');
        return(
            <div>
                <h3>NAME:{name}</h3>
                <h3>Description: {description}</h3>
            </div>
        )
}

export default FirearmShow