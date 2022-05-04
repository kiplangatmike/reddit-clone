import React from 'react'
import './HomeHeader.css'
import Login from '../../pages/Login/Login'
import { Link } from 'react-router-dom'

export default function HomeHeader() {
  return (
    <div className="header-home">
        <div className="header_left">
            <ul>
                <li><a href="/r/popular" className="active">Popular</a></li>
                <li><a href="/r/hot">Hot</a></li>
                <li><a href="/r/rising">Rising</a></li>
                <li><a href="/r/controversial">Controversial</a></li>
                <li><a href="/r/gilded">Gilded</a></li>
            </ul>
        </div>
        <div className="header_right">
            <button className="login-btn"><Link to="/Login" >Login </Link></button>
            <button className="signUp-btn"><Link to="/Register">Sign Up </Link></button>
            
        </div>
    </div>
  )
}
