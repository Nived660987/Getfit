import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../context/UserContext';
import ErrorNotice from '../authentication/misc/ErrorNotice';
import Paperbase from './Dashboard/Paperbase';
import '../Login.css';
import dashboard from "./Dashboard/dashboard";
export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();

	const { setUserData } = useContext(UserContext);
	const history = useHistory();

	const submit = async (e) => {
		e.preventDefault();
		try {
			const loginUser = { email, password };
			const loginRes = await Axios.post('http://localhost:5000/users/login', loginUser);
			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});
			localStorage.setItem('auth-token', loginRes.data.token);
			history.push('/dashboard');
		} catch (err) {
			err.response.data.msg && setError(err.response.data.msg);
		}
	};

	return (
		<div className="login">
			<div className="login_container">
				<h1> Admin Login</h1>
				{error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
				<form className="form" onSubmit={submit}>
					<label htmlFor="login-email">Email</label>
					<input id="login-email" type="email" onChange={(e) => setEmail(e.target.value)} />

					<label htmlFor="login-password">Password</label>
					<input id="login-password" type="password" onChange={(e) => setPassword(e.target.value)} />
					<div className="login_button">
						<input type="submit" className="login_SignInButton" value="Login" />
					</div>
					<p> By Signing-in you agree to Get-Fit's conditions of use.</p>
				</form>
			</div>
		</div>
	);
}
