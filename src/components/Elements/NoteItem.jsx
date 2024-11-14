import React from "react";
import ListItem from "./ListItem";

const NoteItem = ({ notes, onDelete, onArsip }) => {
  return (
    <div className="note-item">
      {notes.map((item) => (
        <ListItem key={item.id} {...item} onDelete={onDelete} onArsip={onArsip} id={item.id}/>
      ))}
    </div>
  );
};

export default NoteItem;
