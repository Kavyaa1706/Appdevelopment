import { useState } from 'react';
import img from '../assets/signupimg.jfif.jpg';
import  "../assets/Login.css";
//import { Link, useParams } from "react-router-dom";

 import { Link, NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Forms() {

	// States for registration
	const [name, setName] = useState('');
	//const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
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
		if (name === '' || password === '') {
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
				<p>User {name} successfully Signed In!!</p>
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

	return (
		<div className="form">
			<div>
				<h1 className='user1'>Login</h1>
			</div>
			<div>
				<img className='asec' src={img}></img>
	</div>
	<div className='box1'>

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

				
				

				
				
				<input className='in2' onChange={handlePassword} 
					value={password} type="password" placeholder='Password' />
					
				
                

				<button onClick={handleSubmit} className="btn1"
						type="submit">
					<b>Login</b>
				</button>
			</form>
			
		</div>
	);
}
