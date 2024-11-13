import React from "react";

const Button = ({fill,clasName, onClick = () => {}}) => {
    return (
        <button type="submit" className={clasName} onClick={onClick}>{fill}</button>
    )
}
export default Button