import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const id = props.id;
  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
      <button
        onClick={(event) => {
          props.deleteNote(id);
          event.preventDefault();
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
export default Note;
