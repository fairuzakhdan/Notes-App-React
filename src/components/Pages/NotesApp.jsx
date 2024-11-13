import React from "react";
import FormNotes from "../Fragments/FormNotes";
import NotesList from "../Fragments/NotesList";

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="notes-app">
            <FormNotes />
            <NotesList />
        </div>
        )
    }
}

export default NotesApp