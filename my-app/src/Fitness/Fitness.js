import React, { useEffect, useState } from 'react';
import Workouts from './Workouts';
import Workout from './Workout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import "./fitness.css";

function Fitness() {
	const [workouts, setWorkouts] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:5000/api/exercises')
			.then((res) => setWorkouts(res.data))
			.catch((error) => console.log(error));
	});
	return (
		<div className="fitness">
			<Router>
				<Route exact path="/" render={() => <Workouts workouts={workouts} />} />
				<Route path="/exercises/:id" render={(props) => <Workout {...props} workouts={workouts} />} />
			</Router>
		</div>
	);
}

export default Fitness;
