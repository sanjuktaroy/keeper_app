import React, { useState } from 'react'
import "./note.scss"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from "axios";

export default function Note({data}) {
  const [isUpdate, setIsUpdate] = useState(false);

  const deleteNote = async () => {
    const res = await axios.get("http://localhost:3001/deletenote/" + data.id);
    console.log("Note deleted successfully!");
    window.location.reload(false);
  };

  const updateNote = async () => {
    //api request for updation
    console.log("Note pdated successfully!");
    window.location.reload(false);
  };

  return (
    <div className="note">
    <div className='top__container'> 
    {
      isUpdate? <input type="text" className='title__text'/>:<div className='title__text'>{data.title}</div> 
      //if updated, change to text from text box
    }
    
    <div className='edit__icon'>
      <EditIcon className='icon' onClick={() => setIsUpdate(!isUpdate)}/>
    </div>
    </div>
    <div className='middle__container'>
    {
      isUpdate? (
        <input type="text" className="desc__container"/>
        ) : (
          <div className="desc__container">{data.description}</div>
        )
    }

    </div>
    <div className='bottom__container'>
    <div className='delete__icon' onClick={() => deleteNote()}>
      <DeleteOutlineIcon className='icon'/>
    </div> 
    </div>
    </div>
  )
}
