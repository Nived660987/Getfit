import React, { useEffect, useState } from 'react';
import Users from './Users';
import User from './User';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

function App2() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:5000/users')
			.then((res) => setUsers(res.data))
			.catch((error) => console.log(error));
			return()=>{
				console.log("Component unmounted");
			}
	});
	return (
		<div>
			<Router>
				<Route exact path="/" render={() => <Users users={users} />} />
				<Route path="/users/:id" render={(props) => <User {...props} users={users} />} />
			</Router>
		</div>
	);
}

export default App2;
