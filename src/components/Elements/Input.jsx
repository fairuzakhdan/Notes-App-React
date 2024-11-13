import React from "react";
const InputNotes = ({type, name, placeholder, value, onChange}) => {
    return (
        <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} />
    )
}

export default InputNotes