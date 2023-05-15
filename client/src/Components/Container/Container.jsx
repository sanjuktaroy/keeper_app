import React, { useState, useEffect } from 'react';
import "./container.scss"
import Note from "../Note/Note"
import New from "../New/New"
import axios from 'axios' 
import AddIcon from '@mui/icons-material/Add';

export default function Container() {
  const [postData,setPostData] = useState([]);
  const [isAdd, setIsAdd] = useState(false)
  const fetchPosts = async () => {
    const posts = await axios.get("http://localhost:3001/getnotes");
    setPostData(posts.data);
    //console.log(posts);
  };

  // fetchPosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container">
    <div className='container__container'>
    {postData.length !==0 
    && 
    postData.map((item) => <Note data={item} key={item.id} />)}
    {isAdd && <New />}
    </div>
    <div className="button__container">
        <div className="add__button" onClick={() => setIsAdd(!isAdd)}>
            <AddIcon className="icon"/>
        </div>
    </div>
    </div>
  )
}
