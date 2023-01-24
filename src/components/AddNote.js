import React,{useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'
import imageAdd from '../images/add.png'
import imageMinus from '../images/minus.png'
const AddNote = (props) => {
    const context=useContext(noteContext)
    const {addNote} = context;
    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handleClick = (e) =>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Note Added Succesfully","success")
        setaddButton(!addButton);
    }
    const onChange = (e) =>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    const [addButton, setaddButton] = useState(false)
    const toggleAddButton = () =>{
      setaddButton(!addButton);
    }
  return (
    <div className='container' style={{maxWidth:'600px',marginTop:'4rem'}}>
    <div className='d-flex justify-content-between'
    onClick={toggleAddButton} 
    style={{
      maxHeight:'60px',
      padding:'2%',
      borderRadius:'0.6rem',
      marginBottom:'5%',
      boxShadow: '2px 2px 22px -7px rgba(0,0,0,0.4)',
      cursor:'pointer'
    }} 
    >
    <div style={{fontSize:'1.3rem', margin:'auto 0'}}>Add a Note ... </div> 
    <img src={addButton?imageMinus:imageAdd} style={{width:'10%', objectFit:'contain'}}/>
    </div>
    {addButton && <form >
  <div className="mb-3">
    <label htmlFor="title" className="form-label">
      Title
    </label>
    <input
      type="text"
      className="form-control"
      id="title"
      name="title"
      aria-describedby="emailHelp"
      value={note.title}
      onChange={onChange}
    />
   
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">
      Description
    </label>
    <textarea
      type="text"
      className="form-control"
      id="description"
      name="description"
      value={note.description}
      onChange={onChange}
    />
  </div>

  <div className="mb-3">
    <label htmlFor="tag" className="form-label">
      Tag
    </label>
    <input
      type="text"
      className="form-control"
      id="tag"
      name="tag"
      value={note.tag}
      onChange={onChange}
    />
  </div> 

  <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
    Add Note
  </button>
</form>}
    </div>
  )
}

export default AddNote