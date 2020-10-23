import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../../context/UserContext';
import ErrorNotice from '../misc/ErrorNotice';
import { FormControl, Select, MenuItem, Radio } from '@material-ui/core';

export default function Register() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [passwordCheck, setPasswordCheck] = useState();
	const [age, setAge] = useState();
	const [displayName, setDisplayName] = useState();
	const [error, setError] = useState();

	const { setUserData } = useContext(UserContext);
	const history = useHistory();

	const submit = async (e) => {
		e.preventDefault();

		try {
			const newUser = { email, password, passwordCheck,age, displayName };
			await Axios.post('http://localhost:5000/users/register', newUser);
			const loginRes = await Axios.post('http://localhost:5000/users/login', {
				email,
				password,
			});
			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});
			localStorage.setItem('auth-token', loginRes.data.token);
			history.push('/login');
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	return (
		<div className="register">
			<div className="register_container">
				<h1 style={{ color: 'White', fontStyle: 'normal' }}>Register</h1>
				{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
				<form className="form" onSubmit={submit}>
					<label htmlFor="register-email">Email</label>
					<input id="register-email" type="email" onChange={(e) => setEmail(e.target.value)} />

					<label htmlFor="register-password">Password</label>
					<input id="register-password" type="password" onChange={(e) => setPassword(e.target.value)} />

					<label htmlFor="register-repassword">Re-Enter Password</label>
					<input
						id="register-repassword"
						type="password"
						onChange={(e) => setPasswordCheck(e.target.value)}
					/>
					<label htmlFor="register-Age">Age</label>
					<input id="register-Age" type="Number" onChange={(e) => setAge(e.target.value)} />
					<label htmlFor="register-display-name">Display Name</label>
					<input id="register-display-name" type="text" onChange={(e) => setDisplayName(e.target.value)} />
					<div className="login_button">
						<input className="login_SignInButton" type="submit" value="Register" />
					</div>
					<p>By Signing-in you agree to Get-Fit's conditions of use.</p>
				</form>
			</div>
		</div>
	);
}
