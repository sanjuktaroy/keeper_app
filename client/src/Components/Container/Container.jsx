import React, { useState } from 'react';
import "./container.scss"
import Note from "../Note/Note"
import axios from 'axios' 

export default function Container() {
  const [postData,setPostData] = useState([]);
  const fetchPosts = async () => {
    const posts = await axios.get("http://localhost:3001/getposts");
    setPostData(posts);
    console.log(posts);
  };

  fetchPosts();

  return (
    <div className="container">
    <div className='container__container'>
      <Note data={postData.data[0]}/>
    </div>
    </div>
  )
}
