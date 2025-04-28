import React, { useState } from "react";

const Form = () => {
    const [value, setValue] = useState({firstName:"", lastName:""})

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hello ${value.firstName} ${value.lastName}`)
        setValue("")
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input 
                  type="text" 
                  value={value.firstName} 
                  onChange={(e) => setValue({...value, firstName:e.target.value})}
                />
                <label>Last Name</label>
                <input 
                   type="text" 
                   value={value.lastName} 
                   onChange={(e) => setValue({...value, lastName:e.target.value})}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form