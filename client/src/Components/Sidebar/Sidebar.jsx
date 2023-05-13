import React from 'react'
import "./sidebar.scss"

export default function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebar__container'>
      <div className='title__text'>Categories</div>
      <div className='button__container'>
        <div className='button'>Home</div>
        <div className='button'>Work</div>
        <div className='button'>Chill</div>
        <div className='button'>Movies</div>
        <div className='button'>Books</div>
      </div>
    </div>
    </div>
  )
}
