import { useState } from 'react';
import img from '../assets/signupimg.jfif.jpg';
import  "../assets/Register.css";
//import { Link, useParams } from "react-router-dom";
//import Forms from './pages/Login';
 import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Home from './Homepage';

export default function Form() {
	const nav=useNavigate()

	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}>
				<p>User {name} successfully registered!!</p>
			</div>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<p>Please enter all the fields!!</p>
			</div>
		);
	};
	const handleRoute=()=>{
		nav ('/pages/Homepage')
	
	}

	return (
		<div className="form">
			<div>
				<h1 className='user'>Sign Up!</h1>
			</div>
			<div>
				<img className='asec' src={img}></img>
	</div>
	<div className='box'>

	</div>
	
	
			

			{/* Calling to the methods */}
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			<form className='fix'>
				{/* Labels and inputs for form data */}
				
				
				<input className="input" onChange={handleName} 
					value={name} type="text" placeholder='Username' />

				
				<input className='input1' onChange={handleEmail} 
					value={email} type="email" placeholder='Email'/>

				
				
				<input className='input2' onChange={handlePassword} 
					value={password} type="password" placeholder='Password' />
					
				<div >
					<p className='acc'>Already have an account?
						<Link to='/pages/Login' className='in'> 
						<i>Sign In</i></Link>
					</p>
				</div>
				

				
					<button onClick={handleSubmit} className="btn"
							type="submit">
						<b>Register</b>
					</button>
				
			</form>
			
		</div>
	);
}
