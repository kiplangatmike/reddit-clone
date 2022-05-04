import React from 'react'
import { Link } from 'react-router-dom'
import './PostBox.css'


export default function SearchBox() {
  return (
    <div className="post-box">
      
        <div className="box">
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"/>
        </div>
          <div className="create-post">
            <Link to="/CreatePosts" >
              <input type="text" name="search" className="btn" placeholder = "Create a post"/> 
            </Link>
          </div>
      
    </div>
  )
}
