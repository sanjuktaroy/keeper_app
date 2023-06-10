import React, { useState, useEffect } from 'react';
import "./container.scss"
import Note from "../Note/Note"
import New from "../New/New"
import axios from 'axios' 
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom';

const url = "https://keeper-app-3hyr.onrender.com";

export default function Container() {
  const [postData,setPostData] = useState([]);
  const [isAdd, setIsAdd] = useState(false)
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  //console.log(category);

  //main route
  const fetchPosts = async () => {
    const posts = await axios.get(url +"/getnotes");
    setPostData(posts.data);
    
    //console.log(posts);
  };

  // categories route
  const fetchPostsByCategory = async () => {
    const posts = await axios.get(url + "/category/"+category);
    setPostData(posts.data);
    
    //console.log(posts);
  };

  useEffect(() => {
    if(!category) {
      fetchPosts();
    }
    else {
      fetchPostsByCategory();
    }
  }, [category]);

  return (
    <div className="container">
    <div className='container__container'>
    {postData.length !==0 
    && 
    postData.map((item) => <Note data={item} key={item.id} />)}
    {isAdd && <New />}
    </div>
    
        <div className="add__button" onClick={() => setIsAdd(!isAdd)}>
            <AddIcon className="icon"/>
        </div>
    </div>
    
  )
}
