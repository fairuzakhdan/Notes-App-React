import React from "react";
import NoteBody from "./NoteBody";
import NoteButton from "./NoteButton";

const ListItem = ({ title, body, createdAt,id, onDelete, onArsip }) => {
  return (
   <div>
    <NoteBody title={title} createdAt={createdAt} body={body}/>
    <NoteButton onDelete={onDelete} onArsip={onArsip} id={id}/>
   </div>
  );
};

export default ListItem;
