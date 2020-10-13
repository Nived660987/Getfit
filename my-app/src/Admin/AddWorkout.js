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
  const [description, setDescription] = useState();
  const [workoutType,setType]=useState();
  const [exercises,setExercises]=useState([
      {image:" ", exerciseName:" "}
  ]);

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
        const addExercise={img,title,description,workoutType,exercises};
        await Axios.post("http://localhost:5000/api/exercises",addExercise); 
        
    }catch(err)
    {
        console.log("Exercise add failed");
    }
};
  
    return (
		<div className="AddWorkout_exercise">
			<form className="form" onSubmit={submit}>
				<label>Title Image</label>
				<input type="text" name="image" onChange={(e) => setImg(e.target.value)} />
				<label>Title</label>
				<input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
				<label>Description</label>
				<input type="text" name="Description" onChange={(e) => setDescription(e.target.value)} />
				<label>Workout Type</label>
				<input type="text" name="type" onChange={(e) => setType(e.target.value)} />
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
					<Button color="secondary" variant="contained" size="small" padding-left="150px">
						<input type="submit" value="Submit" />
					</Button>
				</div>
			</form>
		</div>
	);
    };