import React from "react";

const Button = ({fill, onClick = () => {}}) => {
    return (
        <button type="submit" className="btn-submit" onClick={onClick}>{fill}</button>
    )
}
export default Button