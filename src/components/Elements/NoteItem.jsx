import React from "react";
import ListItem from "./ListItem";

const NoteItem = ({ notes, onDelete, onArsip, status }) => {
  const filtered = notes.filter((note) => note.archived === status)
  return (
    <div className="note-item">
      {filtered.map((item) => (
      
        item.archived === status && (
          <ListItem key={item.id} {...item} onDelete={onDelete} onArsip={onArsip} id={item.id}/>
        )
      ))}
    </div>
  );
};

export default NoteItem;
