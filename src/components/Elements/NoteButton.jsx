import React from "react";
import Button from "./Button";
const NoteButton = ({id, onDelete, onArsip}) => {
  return (
    <div>
      <Button fill="Delete" onClick={() => onDelete(id)}/>
      <Button fill="Arsipkan" onClick={() => onArsip(id)}/>
    </div>
  );
};

export default NoteButton