import React, {useEffect,useState} from 'react';
import axios from "axios";
import CCard from "../components/Card";
import {Grid,Button} from "@material-ui/core";
import { keys } from '@material-ui/core/styles/createBreakpoints';

function Workouts(){

    const[workouts,setWorkouts]=useState([]);
    useEffect(() =>{
        axios.get("http://localhost:5000/api/exercises")
        .then(res => setWorkouts(res.data))
        .catch(error => console.log(error));
    });

      const deleteExercise=(id)=>{
            axios.delete("http://localhost:5000/api/exercises/${id}")
            .then(res => alert(res.data))
             setWorkouts((workouts.filter(elem => elem._id !== id)))
            .catch((error) => {
                console.log(error);
            });
        }    

    
    return(
        <div>
            <Grid container spacing={5} justify="center" >
                
                     {workouts.map((workout,key) =>(
                         <Grid items xs={6} sm={3}>
                    <CCard img={workout.img} title={workout.title} description={workout.description} btn={workout.title}/>
                    <Button onClick={() => deleteExercise(workout._id)}>Delete</Button>
                    </Grid>
            ))};  
            
        </Grid>         
        </div>
    )
}

    export default Workouts;





