import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import './Login.css'
import '../../App.css'



export default function Login() {
    const [data,setData] = useState({
        name: "",
        email:"",
        password:""
    });
    const [error, setError] = useState("");
  
    const handleChange = ({currentTarget:input}) => {
        setData({...data,[input.name]: input.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4001/api/login";
            const {data: res} = await axios.post(url,data);
            localStorage.setItem("token", res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            window.location ="/UserAccount"
            
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

    <div className="login-main">
        
        <div className="sub-main">
            <div>
                <div className="imgs">
                    <div className="container-image">
                        <img src= "images/logo.png" alt="" className="profile"/>
                    </div>

                </div>

                <div>
                <form onSubmit={handleSubmit}> 
                    <h1>Login Page</h1>

                    <div className="first-input">
                        <img src="images/email.png" alt = "email" className="email"/>
                        <input type="text" 
                        placeholder="username" 
                        className="name"
                        name='username'
                        onChange = {handleChange}
                        value={data.username}
                        required
                        />
                    </div>
                    <div className="second-input">
                        <img src="images/email.png" alt = "email" className="email"/>
                        <input 
                        type="email" 
                        placeholder="email" 
                        className="name"
                        name='email'
                        onChange = {handleChange}
                        value={data.email}
                        required

                        /> </div>
                    <div className="second-input">
                        <img src="images/pass.png" alt = "pass" className="email"/>
                        <input type="password" 
                        placeholder="password" 
                        className="name"
                        name='password'
                        onChange = {handleChange}
                        value={data.password}
                        required
                        />
                    </div>
                    
                    <button type="submit">Login</button>
                   
                    
                        <p className="link">
                            <a to="#">Forgot password?</a> or <Link to="/register">Sign up</Link>
                        </p>
                    </form>
                </div>
                
            </div>
            

        </div>
        
    </div>
  )
}
