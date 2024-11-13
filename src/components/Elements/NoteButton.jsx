import React from "react";
import Button from "./Button";
const NoteButton = ({id, onDelete, onArsip}) => {
  return (
    <div className="note-btn">
      <Button fill="Delete" onClick={() => onDelete(id)} clasName="btn-delete"/>
      <Button fill="Arsipkan" onClick={() => onArsip(id)} clasName="btn-arsip"/>
    </div>
  );
};

export default NoteButton