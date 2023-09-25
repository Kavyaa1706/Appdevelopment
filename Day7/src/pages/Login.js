import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import "../assets/Login.css";
import img from "../assets/signupimg.jfif.jpg"

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const submitHandler = (e) => {

    console.log(formdata.username,formdata.password)
    
    e.preventDefault();
    dispatch(login({
      username :formdata.username
    }))
    navigate('/pages/Dashboard')
  }
  return (
    <>
      <div className='container'>
		<div>
			<img  className='asec' src={img}></img>
		</div>
		<div className='box1'>

		</div>
        <div className='auth-wrapper'>
          <form className='auth-form app-x-shadow' onSubmit={submitHandler}>
            <h1 className='user1'>Login Form</h1>
            <input type="text" name="username" id="username" value={formdata.username} onChange={handleChange} placeholder='username' className='input' required />
            <input type="password" name="password" id="password" value={formdata.password} onChange={handleChange} placeholder='password' className='in2' required />

            <button type='submit' className='btn1'> Login </button>
          </form>
           
        </div>
      </div>
    </>
  )
}

export default Login