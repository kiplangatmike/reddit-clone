import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Header from '../UserAccountHeader/Header'
import SideNav from '../Sidebar/SideNav'
import '../UserAccountHeader/Header.css'
import '../../components/Sidebar/SideNav.css'
import '../../pages/Home/index.css'
import '../../App.css'
import './Comment.css'


export default function  Comment() {

    const params = useParams();
    const [post, setPost] = useState ([]);
    useEffect (() => {
      axios
      .get(`/api/posts/${params._id}`)
      .then(res => setPost(res.data.post))
      .catch(error => console.log(error));
     
    },[])
    let PostID = post._id;
    console.log("This is the ID", PostID);

    // commenting 

    const [data,setData] = useState({
        comment: "",
        PostId:post._id,
        
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
            const url = "http://localhost:4001/api/comments";
            const {data: res} = await axios.post(url,{...data, commentedBy: userId });
            
            // navigate ("/UserAccount")
            
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
        
       
        <div className="comment-container">
        <h1>{post && post !== undefined && (
                <p>{post.title}</p>
            )}</h1>
          
        <div className="comment-main">
        <div className="post_center">
            <img src={`https://picsum.photos/id/${Math.floor(
               Math.random() * 50
           )}/400/300`}/>
        </div>
        <div className="post_right">
            
            <span className="post_info">
            {post && post !== undefined && (
                <p>{post.text}</p>
            )}
            </span>
            <p className="post_info">
            {post && post !== undefined && (
                <p>{post.comment}</p>
            )}
            </p>
        </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="comment-textarea">
        
        
        <textarea 
        name="comment" 
        placeholder="Text(optional)"
        onChange = {handleChange}
        value={data.comment}
        required
        
        >
        
        </textarea><br/>

        </div>
        {error && <div>{error}</div> }
        <div className='comment-btn'>
            <button type="submit">Comment</button>
        </div>
        </form> 

    </div>

    
         
    </div>
    </div>
  )
}
