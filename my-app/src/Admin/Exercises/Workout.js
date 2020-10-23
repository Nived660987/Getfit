import React,{useEffect,useState} from "react";
 import axios from "axios";
 import CCard from "../../components/Card";
 import Header from '../../authentication/layout/Header';
 import '../Workout.css';
const Workout=props=>{
    const[title,setTitle]=useState("");
    const[level,setLevel]=useState("");
    const[exercises,setExercises]=useState([""]);
    useEffect(() =>{
        axios.get(`http://localhost:5000/api/exercises/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setLevel(res.data.description),
            setExercises(res.data.exercises)
        ])
        .catch(error =>console.log(error));
    },[props]);

    
    return (
		<div className="AddWorkout_exercise">
			Welcome..!!!
			<h2>{title}</h2>
			<p>{level}</p>
			<div className="fitnesscard">
				{exercises.map((exercise, key) => (
					<div keys={key}>
						<CCard img={exercise.image} title={exercise.exerciseName} />
					</div>
				))}
			</div>
		</div>
	);




}

export default Workout;