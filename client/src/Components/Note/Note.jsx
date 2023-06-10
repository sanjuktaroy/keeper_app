import React, { useState } from 'react'
import "./note.scss"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from "axios";
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';

export default function Note({data}) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [title ,setTitle] = useState("");
  const [desc, setDesc] = useState("");
const url = "https://keeper-app-3hyr.onrender.com";

  const deleteNote = async () => {
    const res = await axios.get(url + "/deletenote/" + data.id);
    console.log("Note deleted successfully!");
    window.location.reload(false);
  };

  const updateNote = async () => {
    //api request for updation
    console.log("Note updated successfully!");
    const value = {
      id: data.id,
      title: title,
      description: desc
    };
    const res = await axios.put(url + "/updatepost", value); //for updation use put function
    window.location.reload(false);
  };


  return (
    <div className="note">
    <div className='top__container'> 
    {
      isUpdate? <input type="text" className="title__text" onChange={(e) => setTitle(e.target.value)} />
      :
      <div className='title__text'>{data.title}</div> 
      //if updated, change to text from text box
    }
    
    <div className='edit__icon'>
    {!isUpdate && (
      <EditIcon className='icon' 
      onClick={() => setIsUpdate(!isUpdate)}/>
    )}
    </div>
    </div>
    <div className='middle__container'>
    {
      isUpdate? (
        <input type="text" className="desc__container" onChange={(e) => setDesc(e.target.value)}/>
        ) : (
          <div className="desc__container">{data.description}</div>
        )
    }

    </div>
    <div className='bottom__container'>
    {isUpdate ?
    (
      <>
      <div className='clear__icon'>
      <ClearIcon className='icon' onClick={() => setIsUpdate(false)}/>
    </div> 
    <div className='done__icon'>
      <DoneIcon onClick={()=> updateNote()} className='icon' />
    </div> 
    </>
    )
    : (
    <div className='delete__icon' onClick={() => deleteNote()}>
      <DeleteOutlineIcon className='icon'/>
    </div> 
    )}
    </div>
    </div>
  );
}
