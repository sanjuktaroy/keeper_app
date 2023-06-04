import React from 'react'
import "./sidebar.scss"
import { Link } from "react-router-dom"

export default function Sidebar() {
const categories = ["Home","Work","Chill","Movies","Books"];


return (
    <div className='sidebar'>
    <div className='sidebar__container'>
      <div className='title__text'>Categories</div>
      <div className='button__container'>
        {categories.map((item) => (
          <Link to={"/categories/" + item} className="link">
            <div className="button"> {item}</div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  )
}
