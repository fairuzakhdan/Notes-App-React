import React from "react";

const FormHeader = ({char}) => {
    return (
        <div className="form-header">
        <h2 className="form-title">Buat Catatan</h2>
        <small className="form-karakter">Sisa Karakter: {char}</small>
        </div>
    )
}

export default FormHeader