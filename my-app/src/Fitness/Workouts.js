import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import axios from 'axios';
import CCard from '../components/Card';

const Workouts = ({ workouts }) => {
	const [exercise, setExercises] = useState([]);

	const deleteExercise = (id) => {
		axios.delete(`http://localhost:5000/api/exercises/${id}`).then((res) => alert(res.data));
		setExercises(exercise.filter((elem) => elem._id !== id));
	};
	return (
		<div>
			Welcome to Articles.....
			{workouts.map((workout, key) => (
				<div key={key}>
					<Link
						to={{
							pathname: `/exercises/${workout._id}`,
						}}
					>
						<CCard
							img={workout.img}
							title={workout.title}
							description={workout.description}
							btn={workout.title}
						/>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Workouts;
