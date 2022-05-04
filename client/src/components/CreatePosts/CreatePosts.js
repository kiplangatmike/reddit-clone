import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../UserAccountHeader/Header'
import SideNav from '../Sidebar/SideNav'
import '../UserAccountHeader/Header.css'
import '../../components/Sidebar/SideNav.css'
import '../../pages/Home/index.css'
import './CreatePosts.css'
import '../../App.css'


// import 'bootstrap/dist/css/bootstrap.min.css'


export default function CreatePosts() {

  const [data,setData] = useState({
    title: "",
    topic: "",
    text:"",
    subreddit: "",
    
});
const [error, setError] = useState("");
const navigate  = useNavigate();
const handleChange = ({currentTarget:input}) => {
    setData({...data,[input.name]: input.value});
};

const handleSubmit = async(e) => {
  e.preventDefault();
   let userId = JSON.parse(localStorage.getItem('user'))._id;
    e.preventDefault();
    try {
        const url = "http://localhost:4001/api/posts";
        const {data: res} = await axios.post(url,{...data, postedBy: userId});
        // navigate ("/Login")
        
        console.log(res.message);
    } catch (error) {
        if (error.response &&
            error.response >= 400 &&
            error.response.status <=500
            ){
                setError(error.response.data.message);
            }
    }
}

  return (

    <div className="container">
    <SideNav/>
    <div className="main">
       <div className="">
        <Header/>
        </div>
        <div className="post-form">
          <form onSubmit={handleSubmit}>

          <h1>Create a Post</h1>
          <div className="post-title">

          <input 
          type="text" 
          name="title" 
          placeholder = "Title"
          onChange = {handleChange}
          value={data.title}
          required
          
          /> <br/>

          </div><br/>

    
          <div className="post-title">

          <input 
          type="text" 
          name="topic" 
          placeholder = "community"
          onChange = {handleChange}
          value={data.topic}
          required
          
          /> <br/>

          </div>

          <div className="post-textarea">

          <textarea 
          name="text" 
          placeholder="Text(optional)"
          onChange = {handleChange}
          value={data.text}
          required
          >
           </textarea><br/>

          </div>

          <div className="post-url">
          <input 
          type="text" 
          name="subreddit" 
          placeholder = "Subreddit"
          onChange = {handleChange}
          value={data.subreddit}
          required
          /> <br/>
          </div><br/>
          {error && <div>{error}</div> }
            <div className='post-btn'>
              <button type="submit">Post</button>
              </div>
          </form>
        </div>
    </div>
    </div>
  )
}
