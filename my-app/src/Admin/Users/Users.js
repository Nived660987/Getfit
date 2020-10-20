import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import axios from 'axios';
import './users.css';
const Users = ({ users }) => {
	const [user, setUser] = useState([]);

	const deleteUser = (id) => {
		axios.delete(`http://localhost:5000/users/${id}`).then((res) => alert(res.data));
		setUser(user.filter((elem) => elem._id !== id));
	};
	return (
		<div className="deluser">
			<h1>Manage users.....</h1>
			<div>
				{users.map((user, key) => (
					<div className="containeruser" key={key}>
						<Link
							to={{
								pathname: `/users/${user._id}`,
							}}
						>
							<h4>{user.email}</h4>
						</Link>
						<p className="usname">{user.displayName}</p>
						<Button
							color="secondary"
							variant="contained"
							size="Large"
							padding-left="150px"
							onClick={() => deleteUser(user._id)}
						>
							Delete
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Users;
