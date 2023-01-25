import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const host = "https://inotebook-backend-dhritiraj.onrender.com";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // const token= localStorage.getItem('token');
  // console.log("authtoken "+);

//function to fetch all note
const fetchNote = async () => {
  // console.log("Fetching a note");
  // API call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    }
  });
  const json = await response.json();
  setNotes(json);
 // console.log('ffff');
};


  //function to add note
  const addNote = async (title, description, tag) => {
    // console.log("Adding a note");
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
          
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // function to delete note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      }
    });
    // eslint-disable-next-line
    const json = await response.json();
     
    // console.log("deleting the node with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //function to edit note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // eslint-disable-next-line
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in the client
    for (let i = 0; i < newNotes.length; i++) {
      if (newNotes[i]._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
   setNotes(newNotes)
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,fetchNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
