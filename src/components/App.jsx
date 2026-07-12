import React, { useState } from "react"
import Header from "./Header" ;
import Footer from "./Footer";
import Note from "./Note";
import staticNotes from "../notes" ;
import CreateNote from "./CreateNote";
function App(){
    const [notes , setNotes] = useState(staticNotes) ;
    function addNote(note){
        setNotes( (prevNotes) => {
            return [...prevNotes , note] ;
        })
    }
    function deleteNote(id){
        const newNotes = notes.filter( (value , index) => {
            return index != id 
        })
        setNotes(newNotes);
    }
    return <div>
        <Header />
        <CreateNote addNote = {addNote}/>
        {notes.map( ( (note , index) => (
            <Note
                key = {index}
                id = {index}
                heading = {note.title} 
                description = {note.content}
                deleteNote = {deleteNote}
            />
        )))}
        <Footer />
    </div>
}

export default App;