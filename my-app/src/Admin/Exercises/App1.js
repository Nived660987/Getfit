import React,{useEffect,useState} from "react";
import Workouts from "./Workouts";
import Workout from "./Workout";
import EditWorkout from "../EditWorkout";
import {BrowserRouter as Router,Route} from "react-router-dom";
import axios from "axios";

function App1(){
    const[workouts,setWorkouts]=useState([]);
    useEffect(() =>{
        axios.get("http://localhost:5000/api/exercises")
        .then(res => setWorkouts(res.data))
        .catch(error => console.log(error));
        return () => {
			console.log('Component unmounted');
		};
    })
    return(
        <div>
            <Router>
            <Route exact path="/" render={() => <Workouts workouts={workouts}/>} />
            <Route path="/exercises/:id" render={props => <Workout {...props} workouts={workouts}/>} />
            <Route path="/editWorkout/:id" render={props => <EditWorkout {...props} workouts={workouts}/>} />
            </Router>

        </div>
    )



}

export default App1;