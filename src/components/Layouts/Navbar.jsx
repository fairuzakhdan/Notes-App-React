import React from "react"
import InputNotes from "../Elements/input"
const Navbar = ({value, onChange}) => {
    return (
            <div className="navbar">
                <h1 className="title-notes">Notes</h1>
                <InputNotes type="text" name="search" placeholder="Cari Catatan ..." value={value} onChange={onChange}/>
            </div>
        )
}
export default Navbar