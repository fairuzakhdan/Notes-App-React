import React from "react";

const TextArea = ({name, placeholder,value, onChange, rows}) => {
    return (
        <textarea name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} rows={rows} required></textarea>
    )
}

export default TextArea