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
        prevState: prevState.notes.map((note) =>
          note.id === id ? (note.archived = true) : note
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
        <h2 className="notes-title">Catatan Aktif</h2>
        {this.state.notes.length > 0 ? (
          <NoteItem
            notes={filteredNotes}
            onDelete={this.ondDeleteHandler}
            onArsip={this.onArsipHandler}
            status={false}
          />
        ) : (
          <p>Tidak Ada Catatan</p>
        )}
        <h2 className="arsip-title">Arsip</h2>
        {this.state.notes.filter((note) => note.archived === true).length >
        0 ? (
          <NoteItem
            notes={filteredNotes}
            onDelete={this.ondDeleteHandler}
            onArsip={this.onArsipHandler}
            status={true}
          />
        ) : (
          <p className="no-arsip">Tidak Ada Catatan</p>
        )}
      </div>
    );
  }
}

export default NotesApp;
