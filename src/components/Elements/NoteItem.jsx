import React from "react";
import ListItem from "./ListItem";

const NoteItem = ({ notes }) => {
  return (
    <div>
      {notes.map((item) => {
        <ListItem key={item.id} {...item} />;
      })}
      <div>
        <Button fill="Delete" onClick={() => onDelete(id)} />
        <Button fill="Arsipkan" onClick={() => onArsip(id)} />
      </div>
    </div>
  );
};

export default NoteItem;
