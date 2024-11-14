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
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.ondDeleteHandler = this.ondDeleteHandler.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);
  }

  onSeacrhNotes(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }
  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: Date.now(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  ondDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }
  onArsipHandler(id) {
    this.setState((prevState) => {
      return {
        prevState: prevState.map((note) =>
          note.id === id ? (note.archived = !note.archived) : note
        ),
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
        <FormNotes addNotes={this.onAddNotesHandler} />
        {this.state.notes.length > 0 ? (
          <NoteItem
            notes={filteredNotes}
            onDelete={this.ondDeleteHandler}
            onArsip={this.onArsipHandler}
            status={false}
          />
        ) : (
          <h1>Tidak Ada Catatan</h1>
        )}
        <h2>Arsip</h2>
        {this.state.notes.length > 0 ? (
          <NoteItem
            notes={filteredNotes}
            onDelete={this.ondDeleteHandler}
            onArsip={this.onArsipHandler}
            status={true}
          />
        ) : (
          <h1>Tidak Ada Catatan</h1>
        )}
      </div>
    );
  }
}

export default NotesApp;
