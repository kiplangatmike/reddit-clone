import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Register.css'
import '../../App.css'



export default function Register() {

    const [data,setData] = useState({
        name: "",
        email:"",
        password:""
    });
    const [error, setError] = useState("");
    const navigate  = useNavigate();
    const handleChange = ({currentTarget:input}) => {
        setData({...data,[input.name]: input.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4001/api/register";
            const {data: res} = await axios.post(url,data);
            navigate ("/UserAccount")
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
    <div className="_main">
        <div className="sub-main">
            <div>
                <div className="imgs">
                    <div className="container-image">
                        <img src= "images/logo.png" alt="" className="profile"/>
                    </div>

                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>

                    <div className="first-input">
                        <img src="images/user.png" alt = "email" className="email"/>
                        <input 
                        type="text" 
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

                        />

                    </div>

                    <div className="second-input">
                        <img src="images/pass.png" alt = "pass" className="email"/>
                        <input 
                        type="password" 
                        placeholder="password" 
                        className="name"
                        name='password'
                        onChange = {handleChange}
                        value={data.password}
                        required
                        />
                    </div>
                    {error && <div>{error}</div> }
                    
                    <button type="submit">Sign Up</button>
                    
                    
                        <p className="link">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>
       
    </div>
  )
}
