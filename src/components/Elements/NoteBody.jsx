import React from "react";
const NoteBody = ({title, createdAt, body}) => {
  return (
    <div>
      <h1>{title}</h1>
      <small>{createdAt}</small>
      <p>{body}</p>
    </div>
  );
};

export default NoteBody;
