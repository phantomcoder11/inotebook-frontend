import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext';
const NoteItem = (props) => {
   const {note,updateNote} = props; 
   const context=useContext(noteContext)
   const {deleteNote} = context;

   const [isHover, setIsHover] = useState(false);
   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

  return (
    <div className='col-md-3' 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    

    >
        <div className="card my-3"     style={isHover? {boxShadow: '2px 2px 22px -7px rgba(0,0,0,0.4)' }: {boxShadow:''}}>
  <div className="card-body" >
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description} </p>
    <p>{note.tag}</p>
    <i style={isHover? {visibility:'visible'}: {visibility:'hidden'}} className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Note Deleted","success")}}></i>
    <i style={isHover? {visibility:'visible'}: {visibility:'hidden'}} className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>  
  </div>
</div>
    </div>
  )
}

export default NoteItem