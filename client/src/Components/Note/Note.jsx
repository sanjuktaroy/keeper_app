import React from 'react'
import "./note.scss"
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Note({data}) {
  return (
    <div className="note">
    <div className='top__container'> 
    <div className='title__text'>Note 1</div>
    <div className='edit__icon'>
      <EditIcon className='icon'/>
    </div>
    </div>
    <div className='middle__container'>
    <div className='desc__container'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.  
    </div>
    </div>
    <div className='bottom__container'>
    <div className='delete__icon'>
      <DeleteOutlineIcon className='icon'/>
    </div> 
    </div>
    </div>
  )
}
