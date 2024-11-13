import React from "react";

const TextArea = ({name, placeholder,value, onChange}) => {
    return (
        <textarea name={name} id={name} placeholder={placeholder} value={value} onChange={onChange}></textarea>
    )
}

export default TextArea