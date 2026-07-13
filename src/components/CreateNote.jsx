import React, { useState } from "react";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";

function CreateNote(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCreateAreaClicked, setIsCreateAreaClicked] = useState(false);

  function handleOnChange(event) {
    const { name, value } = event.target;
    name == "title" ? setTitle(value) : setDescription(value);
  }   

  function handleSubmit(event) {
    const newNote = {
      title: title,
      content: description,
    };
    props.addNote(newNote);
    setTitle("");
    setDescription("");
    event.preventDefault();
  }

  function handleCreateNoteOnClick(event) {
    setIsCreateAreaClicked((prev) => !prev);
  }
  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder="Todo Title"
          name="title"
          value={title}
          onClick={handleCreateNoteOnClick}
        ></input>
        {isCreateAreaClicked ? (
          <textarea
            onChange={handleOnChange}
            placeholder="Description"
            name="description"
            rows={3}
            value={description}
          ></textarea>
        ) : (
          ""
        )}
        <Zoom in={isCreateAreaClicked ? true : false}>
          <Fab onClick={handleSubmit}>
            {" "}
            <AddTaskIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
