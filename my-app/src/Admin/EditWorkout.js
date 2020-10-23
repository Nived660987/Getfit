import React, {useEffect,useState} from "react";
import Axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import './Users/users.css';
 
export default function EditWorkout(props)
{
  const [img,setImg]=useState();
  const [title, setTitle] = useState();
  const [level, setLevel] = useState();
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

  useEffect(() =>{
    Axios.get(`http://localhost:5000/api/exercises/${props.match.params.id}`)
    .then(res => [
        setTitle(res.data.title),
        setLevel(res.data.level),
        setExercises(res.data.exercises)
    ])
    .catch(error =>console.log(error));
},[props]);



    const submit = async(e) =>{

    e.preventDefault();
    try{
        const editExercise={img,title,level,workoutType,exercises};
        await Axios.patch(`http://localhost:5000/api/exercises/${props.match.params.id}`,editExercise); 
        if(editExercise)
          alert("Workout Edit Success");
    }catch(err)
    {
        console.log("Exercise update failed");
    }
};
  
    return (
		<div className="AddWorkout_exercise">
			<h1 style={{ color: 'White', fontStyle: 'normal' }}>Edit Workout</h1>
			<form className="form" onSubmit={submit}>
				<label>Title Image</label>
				<input type="text" name="title-Image" onChange={(e) => setImg(e.target.value)} />
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
					<label>Submit</label>
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
    };