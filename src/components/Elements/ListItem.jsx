import React from "react";
import NoteBody from "./NoteBody";
import NoteButton from "./NoteButton";

const ListItem = ({ title, body, createdAt,id, onDelete, onArsip }) => {
  return (
   <div className="list-item">
    <NoteBody title={title} createdAt={createdAt} body={body}/>
    <NoteButton onDelete={onDelete} onArsip={onArsip} id={id}/>
   </div>
  );
};

export default ListItem;
