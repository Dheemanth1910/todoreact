import React from "react";

function Note(props){
    const id = props.id;
    return <div className="note">
        <h1>{props.heading}</h1>
        <p>{props.description}</p>
        <button onClick = { (event) => {
            props.deleteNote(id);
            event.preventDefault();
        }}>Delete</button>
    </div>
}

export default Note