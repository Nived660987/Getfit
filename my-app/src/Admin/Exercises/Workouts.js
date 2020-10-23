import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import axios from 'axios';
import CCard from '../../components/Card';
import '../Workout.css';
const Workouts = ({ workouts }) => {
	const [exercise, setExercises] = useState([]);
	const [search, setSearch] = useState();

	const deleteExercise = (id) => {
		axios.delete(`http://localhost:5000/api/exercises/${id}`).then((res) => alert(res.data));
		setExercises(exercise.filter((elem) => elem._id !== id));
	};
	//let workoutType="Strength";
	/*const searchWorkouts=(search)=>{
		
		for(var i=0;i<21;i++)
		{
			for(var key in workouts[i])
			{
			   if(workouts[i][key]==search)
			   {
				   return workouts[i];
				
			}
			
			  
			}
		}		
		}*/

	return (
		<div className="workoutcs">
			<div className="deluser">
				<h1> Choose your workout</h1>

				<input className="search" type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
			</div>
			{workouts
				.filter((workout) => {
					if (search == null || search == undefined) return workout;
					else if (workout.workoutType == search || workout.level==search) return workout;
				})
				.map((workout, key) => (
					<div className="workoutc" key={key}>
						<Link
							to={{
								pathname: `/exercises/${workout._id}`,
							}}
						>
							<CCard
							className="ccard"
								img={workout.img}
								title={workout.title}
								level={workout.level}
								workoutType={workout.workoutType}
							/>
						</Link>
						<div>
							<Link to={`/editWorkout/${workout._id}`}>
								<Button color="primary" variant="contained" size="ELarge" padding-left="150px">
									Edit
								</Button>
							</Link>
						</div>
						<div>
							<Button
								color="secondary"
								variant="contained"
								size="ELarge"
								padding-left="150px"
								onClick={() => deleteExercise(workout._id)}
							>
								Delete
							</Button>
						</div>
					</div>
				))}
		</div>
	);
};

export default Workouts;
