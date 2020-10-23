import React, {useState} from "react";
import Axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import './Workout.css';
import { Button } from "@material-ui/core";

 
export default function AddWorkout()
{
  const [img,setImg]=useState();
  const [title, setTitle] = useState();
  const [level, setLevel] = useState('Beginner');
  const [workoutType,setType]=useState('Strength');
  const [exercises,setExercises]=useState([
      {image:" ", exerciseName:" "}
  ]);
  const [error,setError]=useState();

  const handleChangeInput = (index, event) => {
    const values = [...exercises];
    values[index][event.target.name] = event.target.value;
    setExercises(values);
  }

   const addInput=()=>{
        setExercises([...exercises,{image:" ",exerciseName:" "}])
   }
   const handleRemoveFields = (index) => {
    const values  = [...exercises];
    values.splice(index, 1);
    setExercises(values);
  }



    const submit = async(e) =>{

    e.preventDefault();
    try{
        const addExercise={img,title,level,workoutType,exercises};
        await Axios.post("http://localhost:5000/api/exercises",addExercise); 
		 if(addExercise)
		 {
			alert("Workout Added");
			 
				
			
		 }

    }catch(err)
    {
       alert("Exercise add failed");
    }
};
  
  
    return (
		<div className="AddWorkout_exercise">
			<form className="form" onSubmit={submit}>
				<h1 style={{ color: 'white', fontweight: '80px',fontStyle: 'normal', fontSize: '50px' }}>Add Workout</h1>
				<label>Title Image</label>
				<input type="text" name="image" onChange={(e) => setImg(e.target.value)} />

				<label>Title</label>
				<input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
				<label>Level</label>
				<select onChange={(e) => setLevel(e.target.value)}>
					<option value="Beginner">Beginner</option>
					<option value="Intermediate">Intermediate</option>
					<option value="Advanced">Advanced</option>
				</select>
				<label>Workout Type</label>
				<select onChange={(e) => setType(e.target.value)}>
					<option value="Strength">Strength</option>
					<option value="Mobility">Mobility</option>
					<option value="Endurance">Endurance</option>
					<option value="Yoga">Yoga</option>
				</select>
				{exercises.map((exercise, index) => (
					<div key={index}>
						<label>Image</label>
						<input
							type="text"
							name="image"
							value={exercise.image}
							onChange={(event) => handleChangeInput(index, event)}
						/>
						<label>Exercise Name</label>
						<input
							type="text"
							name="exerciseName"
							value={exercise.exerciseName}
							onChange={(event) => handleChangeInput(index, event)}
						/>

						<IconButton onClick={() => handleRemoveFields(index)}>
							<RemoveIcon />
						</IconButton>

						<IconButton onClick={() => addInput()}>
							<AddIcon />
						</IconButton>
					</div>
				))}
				<div>
					<input className="" type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
    };