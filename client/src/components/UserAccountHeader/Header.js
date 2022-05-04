import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <div className="header">
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
            <i className="fas fa-bell"></i>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"/>
            <div className="header_user">
                <span>{JSON.parse(localStorage.getItem('user')).username}</span>
                <i className="fas fa-caret-down"></i>
            </div>
            
        </div>
    </div>
  )
}
