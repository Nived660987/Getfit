import React, { useEffect, useState } from 'react';
import Workouts from '../Fitness/Workouts';
import Workout from '../Fitness/Workout';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import "../Fitness/fitness.css";

function App1() {
	const [workouts, setWorkouts] = useState([]);
	useEffect(() => {
		axios
			.get('http://localhost:5000/api/exercises')
			.then((res) => setWorkouts(res.data))
			.catch((error) => console.log(error));
	});
	return (
		<div>
			<Router>
				<Route exact path="/category/Fitness" render={() => <Workouts workouts={workouts} />} />
				<Route path="/exercises/:id" render={(props) => <Workout {...props} workouts={workouts} />} />
			</Router>
		</div>
	);
}

export default App1;
