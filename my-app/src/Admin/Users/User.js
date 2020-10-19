import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = (props) => {
	const [email, setEmail] = useState('');
	const [displayName, setdisplayName] = useState('');

	useEffect(() => {
		axios
			.get(`http://localhost:5000/users/${props.match.params.id}`)
			.then((res) => [setEmail(res.data.email), setdisplayName(res.data.displayName)])
			.catch((error) => console.log(error));
	}, [props]);

	return (
		<div>
			Welcome..!!!
			<h2>{email}</h2>
			<h3>{displayName}</h3>
		</div>
	);
};

export default User;
