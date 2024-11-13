import React from "react";

const ListItem = ({ title, body, createdAt }) => {
  return (
    <div>
      <h1>{title}</h1>
      <small>{createdAt}</small>
      <p>{body}</p>
    </div>
  );
};

export default ListItem;
