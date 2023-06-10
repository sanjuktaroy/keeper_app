import React, { useState } from 'react'
import "./new.scss"
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default function Newe() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [category, setCategory] = useState("Home");

  const addNote = async () => {
    const value = {
      id: uuidv4(),
      title: title,
      description: description,
      category: category
    };
    //console.log(value);
    const res = await axios.post("http://localhost:3001/createpost",value);
    console.log("Value added successfully!");
    window.location.reload(false);
  };

  return (
    <div className="new">
    <div className='top__container'> 
    <input 
    type='text' 
    onChange={(event)=> setTitle(event.target.value)}
    className='title__text'/>
    </div>
    <div className='middle__container'>
    <input type='text' 
    onChange={(event)=> setdescription(event.target.value)}
    className='desc__container'/>
    
    <select name="category" 
    id="category" 
    onChange={(event) => setCategory(event.target.value)}
    >

    <option value="Home">Home</option>
    <option value="Work">Work</option>
    <option value="Chill">Chill</option>
    <option value="Books">Books</option>
    <option value="Movies">Movies</option>
  </select>
    </div>
    <div className='bottom__container'>
    {/* <div className='clear__icon'>
      <ClearIcon className='icon'/>
    </div>  */}
    <div className='done__icon'>
      <DoneIcon onClick={()=> addNote()} className='icon'/>
    </div> 
    </div>
    </div>
  )
}
