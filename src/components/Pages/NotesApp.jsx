import React from "react";
import FormNotes from "../Elements/FormNotes";
import Navbar from "../Layouts/Navbar";
import { getInitialData } from "../../utils/index";
import NoteItem from "../Elements/NoteItem";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };
    this.onSeacrhNotes = this.onSeacrhNotes.bind(this);
  }

  onSeacrhNotes(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }
  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div className="notes-app">
        <Navbar value={this.state.search} onChange={this.onSeacrhNotes} />
        <FormNotes />
        <NoteItem notes={filteredNotes} />
      </div>
    );
  }
}

export default NotesApp;
