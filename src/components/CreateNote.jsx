import React, { useState } from "react";

function CreateNote(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  return (
    <div className="createNote">
      <form>
        <input
          type="text"
          onChange={handleOnChange}
          placeholder="Todo Title"
          name="title"
          value={title}
        ></input>
        <textarea
          onChange={handleOnChange}
          placeholder="Todo Description"
          name="description"
          value={description}
        ></textarea>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
