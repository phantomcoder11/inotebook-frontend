import React, { useState } from 'react'
import NoteContext from "./noteContext";	
const NoteState = (props) => {	
const notesInitial= [
    {
      "_id": "63ab13d46a5e35bbdf149d33",
      "title": "My 1st note title",
      "description": "hey man its your sencond note, testing testing",
      "tag": "personal",
      "date": "2022-12-27T15:48:36.952Z",
      "__v": 0
    },
    {
        "_id": "63ab13d46a5e35bbdf149d33",
        "title": "My 1st note title",
        "description": "hey man its your sencond note, testing testing",
        "tag": "personal",
        "date": "2022-12-27T15:48:36.952Z",
        "__v": 0
      },
      {
        "_id": "63ab13d46a5e35bbdf149d33",
        "title": "My 1st note title",
        "description": "hey man its your sencond note, testing testing",
        "tag": "personal",
        "date": "2022-12-27T15:48:36.952Z",
        "__v": 0
      },
      {
        "_id": "63ab13d46a5e35bbdf149d33",
        "title": "My 1st note title",
        "description": "hey man its your sencond note, testing testing",
        "tag": "personal",
        "date": "2022-12-27T15:48:36.952Z",
        "__v": 0
      },
      {
        "_id": "63ab13d46a5e35bbdf149d33",
        "title": "My 1st note title",
        "description": "hey man its your sencond note, testing testing",
        "tag": "personal",
        "date": "2022-12-27T15:48:36.952Z",
        "__v": 0
      },
    {
      "_id": "63ab13dc6a5e35bbdf149d35",
      "title": "My 2nd note title",
      "description": "hey man its your sencond note, testing testing",
      "tag": "personal",
      "date": "2022-12-27T15:48:44.204Z",
      "__v": 0
    },
    {
      "_id": "63ab14526a5e35bbdf149d38",
      "title": "My 3rd note title",
      "description": "hey man its your sencond note, testing testing",
      "tag": "personal",
      "date": "2022-12-27T15:50:42.246Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
  return (	
    <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>	
  );	
};	
export default NoteState;