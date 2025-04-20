import React from 'react'
import './login.css';
import blob from '../images/blob.svg'
import network from '../images/network.jpg'
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from "../../src/context/authContext";

const Register = () => {

    const [inputs, setInputs]=useState({
        username:"",
        password:"",
        email: "abc@gmail.com",
        name: "arsa"
      })

      const handleChange=(e)=>{  
        setInputs(prev=>({...prev,  [e.target.name] : e.target.value}))
      }
    
      const [err, setErr]=useState(null);
    
      const navigate=useNavigate()
    
      const { register } = useContext(AuthContext);
    
      const handleLogin = async (e) => {
        e.preventDefault()
        try {
          await register(inputs);
          navigate("/")
        } catch (err) {
          setErr(err.response.data)
        }
      };

    return (
        <div className='Logindiv'>
            <img src={blob} alt="header" />
            <div className='logincontent'>
            <h1 class="heading">CONNECT JAMIA</h1>
            <h2 class="tagline">Bridging alumni with students</h2>
            <p className='loginp'>
                Ever wondered where the graduates of our university end up? Wanted to ask
                them for advice? Well, sign in and let us begin.
            </p>

            <div class="container">
                <form action="" class="form">
                    <h2>Register</h2>
                    <input name="username" class="box" placeholder="Enter Username"  onChange={handleChange} />
                    <input type="password" name="password" class="box" placeholder="Enter Password" onChange={handleChange} />
                    <input type="text" name="email" class="box" placeholder="Enter Email" onChange={handleChange} />
                    <input type="text" name="name" class="box" placeholder="Enter Name" onChange={handleChange} />
                    <input type="submit" value="Register" id="submit" onClick={handleLogin}/>
                </form>
                <div class="side">
                    <img src={network} alt="illustration" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Register