import React,{useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import axios from "axios";
import CCard from "../../components/Card";
import '../Users/users.css';
const Workouts= ({workouts})=>{
    const[exercise,setExercises]=useState([]);

    const deleteExercise=id=>{
        axios.delete(`http://localhost:5000/api/exercises/${id}`)
        .then(res => alert(res.data))
        setExercises(exercise.filter(elem => elem._id !== id));
    }
    return (
		<div className="deluser">
			<h1> Choose your workout</h1>
			{workouts.map((workout, key) => (
				<div className="workoutc" key={key}>
					<Link
						to={{
							pathname: `/exercises/${workout._id}`,
						}}
					>
						<CCard img={workout.img} title={workout.title} description={workout.description} />
					</Link>
						<div>
							<Link to={`/editWorkout/${workout._id}`}>
								<Button color="primary" variant="contained" size="small" padding-left="150px">
									Edit
								</Button>
							</Link>
						</div>
						<div>
							<Button
								color="secondary"
								variant="contained"
								size="small"
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