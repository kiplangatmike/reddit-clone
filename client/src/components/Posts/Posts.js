import axios from 'axios';
import React, {useState, useEffect} from 'react'
import PostItem from '../PostItem/PostItem'
import Comments from '../Comments/Comment'
import './Posts.css'
export default function Posts() {
    const [posts, setPosts] = useState ([])
    useEffect (() => {
      axios
      .get('/api/posts/')
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
    },[])
    console.log({posts})
  return (
    <div className="posts">
         {posts.posts !== undefined && posts.posts.map((post, key) => (
            <PostItem key={post._id} post={post} />
            
        ))}
       
    </div>
    
  )
}
