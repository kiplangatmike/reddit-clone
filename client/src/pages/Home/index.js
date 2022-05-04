import React from 'react'
import Header from '../../components/HomeHeader/HomeHeader'
import Posts from '../../components/Posts/Posts'
import SideNav from '../../components/Sidebar/SideNav'
import SearchBox from '../../components/PostBox/PostBox'
import CreatePosts from '../../components/CreatePosts/CreatePosts'
//import Articles from '../../components/Articles'
import './index.css'



export default function Home() {
  return (
    <div className="container">
    <SideNav/>
    <div className="main">
        <Header/>
        {/* <SearchBox/> */}
        <Posts/>
    </div>
    </div>
  )
}
