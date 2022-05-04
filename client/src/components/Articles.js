import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Articles = () => {
    const [posts, setPosts] = useState ([])
  useEffect (() => {
    axios
    .get('/api/posts')
    .then(res => setPosts(res.data))
    .catch(error => console.log(error));
  },[])
  console.log("POSTS =>>", posts.data);
    return  (
    <div>
        Welcome to the Articles component
        {posts.data.length > 0 && posts.data.map((article,key) => (
            <div>
            <h2>{article.text}</h2>
            <h2>{article.text}</h2>
            </div>
            
        ))} 
        
    </div>
    )
};

export default Articles;