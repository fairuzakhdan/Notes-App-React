import React from "react";
import ListItem from "./ListItem";
import Button from "./Button";

const NoteItem = ({ notes, onDelete, onArsip }) => {
  return (
    <div className="note-item">
      {notes.map((item) => (
        <ListItem key={item.id} {...item} onDelete={onDelete} onArsip={onArsip}/>
      ))}
    </div>
  );
};

export default NoteItem;
