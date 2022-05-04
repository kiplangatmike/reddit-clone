import React from 'react'
import Header from '../../components/UserAccountHeader/Header'
import Posts from '../../components/Posts/Posts'
import SideNav from '../../components/Sidebar/SideNav'
import SearchBox from '../../components/PostBox/PostBox'
import Comments from '../../components/Comments/Comment'
// import CreatePosts from '../../components/CreatePosts/CreatePosts'
//import Articles from '../../components/Articles'
import './index.css'


export default function Home() {
  


  return (
    <div className="container">
    <SideNav/>
    <div className="main">
        <Header/>
        <SearchBox/>
        <Posts/>
    </div>
    </div>
  )
}
