import React, {useState} from "react"



function ClickMe(){

    const [count, setCount] = useState("");
    const [displayedCount, setDisplayedCount] = useState(0);
    const [value, setValue] = useState('');

    function handleChange(e){
        let word = (e.target.value)
        console.log(word)
        setCount(word.length)
        console.log(word.length)
        setValue(word)
    }

    function handleClickSubmit(e){
        e.preventDefault();
        addCounts(e);
        setCount("")
    }

    function addCounts(e){
        e.preventDefault();
        setDisplayedCount(count + displayedCount)
    }

    function resetValue(e){
        e.preventDefault();
        setValue("")
    }
    
    return(
        <div>
            <form onSubmit = {(e) => {handleClickSubmit(e); addCounts(e); resetValue(e)}}>
                <label>
                    Type:
                        <input id = "formText" type = "text" value = {value} onChange = {handleChange}/>
                </label>
                    <input type = "submit" value = "Click Me"/>
                <h3>{displayedCount}</h3>
                {/* display cumulative letter count in <h3></h3> */}
            </form>
        </div>
    )

}

export default ClickMe