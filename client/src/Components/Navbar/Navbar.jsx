import React from 'react'
import "./navbar.scss"
import DescriptionIcon from '@mui/icons-material/Description';

export default function Navbar() {
  return (
    <div className="navbar">
    <div className='navbar__container'>
    {/* <div className='note__icon'>
      <DescriptionIcon className='icon'/>
    </div> */}
    <div className='title'>Keeper</div>
    </div> 
    </div>
  )
}
