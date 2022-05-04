import React from 'react'
import './SideNav.css'
export default function SideNav() {
    const menus = [
        {id: 1, to: '/r/popular', text: "Popular"},
        {id: 2, to: '/r/all', text: "All"},
        {id: 3, to: '/r/random', text: "Random"}

    ]

    const subreddits =[
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful",

    ]
  return (
    <div className="sidenav">
        <div className='sidenav_logo'>
        <img src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png" />
        </div>
        <div className="sidenav_search">
            <input type="text" name="search" placeholder = "Search"/>
            <i className="fas fa-search"></i>
        </div>
        <div className="sidenav_link">
            <ul className='Sidenav_menu'>
                {menus.map(menu =>(
                    <li><a key={menu.id} href={menu.to}>{menu.text}</a></li>
                ))}
            </ul>
            <hr/>
            <ul className='sidenav_subreddit'>
                   {subreddits.map(subreddit => (
                       <li><a key={subreddit} href={`/r/${subreddit}`}>{subreddit}</a></li>
                   ))} 
            </ul>
        </div>

        
    </div>
  )
}
