import React from "react";
import FormNotes from "../Fragments/FormNotes";
import Navbar from "../Layouts/Navbar";
import { getInitialData } from "../../utils/index";
import NoteItem from "../Elements/NoteItem";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }
  render() {
    return (
      <div className="notes-app">
        <Navbar />
        <FormNotes />
        <NoteItem notes={this.state.notes}/>
      </div>
    );
  }
}

export default NotesApp;
