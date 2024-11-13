import React from "react";
import FormNotes from "../Fragments/FormNotes";

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="notes-app">
            <FormNotes />
        </div>
        )
    }
}

export default NotesApp