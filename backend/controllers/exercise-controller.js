const HttpError=require("../models/http-error-model");
const uuid=require("uuid");

const Exercise=require("../models/exerciseModel");
let Dummy_Exercises=[
    {
        id:'e1',
        title:'core burn',
        description:'This is a workout which focuses on the core'
        
    }
    ];
    const getExerciseById=async(req,res,next) =>{
       const exerciseId=req.params.eid;
       let exercise;
       exercise=Exercise.findById(exerciseId)
       .then(exercise => res.json(exercise))
       .catch(err =>res.status(404).json("Error received"));
       if(!exercise)
    {
       const error= new HttpError("Could not find id",404);
        return next(error);

    }
     
    }


const getExercise= async (req,res,next) =>{
    const exerciseId=req.params.eid;
    let exercise;
     exercise=Exercise.find()
     .then(exercise =>res.json(exercise))
     .catch(err =>res.status(404).json("Error received"));
    if(!exercise)
    {
       const error= new HttpError("Could not find id",404);
        return next(error);

    }
     


  };

const createExercise= async (req,res,next)=>{
     const {img,title,level,workoutType,exercises}=req.body;
     if (!img || !title || !level || !workoutType || !exercises)
			return res.status(400).json({ msg: 'Not all fields have been entered.' });
		
     const createdExercise=new Exercise({
         img,
        title,
        level,
        workoutType,
        exercises
        
     });
     try{
         await createdExercise.save();
     }catch(err){
         res.status(500).json({ HttpError: err.message });
     }
     res.status(201).json({exercise: createdExercise});



  };

   const updateExercise= async (req,res,next) =>{
      const { img, title, level, workoutType, exercises } = req.body;
        const exerciseId=req.params.eid;
        let exercise;
    try{
     exercise=await Exercise.findById(exerciseId);
    }catch(err)
    {
        const error=new HttpError("Could not find exercise by id",500);
        return next(error);
    }
        exercise.img = img;
        exercise.title=title;
        exercise.level=level;
        exercise.workoutType = workoutType;
        exercise.exercises = exercises;
        try{
            await exercise.save();
        }catch(err){
            const error=new HttpError("Update exercise failed",500);
            return next(error);
        }
       res.status(201).json({exercise: (await exercise).toObject({getters:true})});

   };

   const deleteExercise= async (req,res,next) =>{

        const exerciseId=req.params.eid;
        let exercise;
        try{
         exercise=await Exercise.findById(exerciseId);
        }catch(err)
        {
            const error=new HttpError("Could not find exercise by id",500);
            return next(error);
        }
        try{
            await exercise.remove();
        }catch(err){
            const error=new HttpError("Delete exercise failed",500);
            return next(error);
        }
        res.status(200).json({message:"Deleted exercise"});
   }

 exports.getExerciseById=getExerciseById;  
 exports.getExercise=getExercise;
 exports.createExercise=createExercise;
 exports.updateExercise=updateExercise;
 exports.deleteExercise=deleteExercise;