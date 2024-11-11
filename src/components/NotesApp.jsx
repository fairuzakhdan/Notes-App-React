import React from "react";
import InputNotes from "./InputNotes";

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="notes-app">
            <InputNotes />
        </div>
        )
    }
}

export default NotesApp