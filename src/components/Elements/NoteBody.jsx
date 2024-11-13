import React from "react";
const NoteBody = ({title, createdAt, body}) => {
  return (
    <div className="note-body">
      <h3>{title}</h3>
      <small>{createdAt}</small>
      <p>{body}</p>
    </div>
  );
};

export default NoteBody;
