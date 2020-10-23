mongoose=require("mongoose");

const Schema=mongoose.Schema;


const exerciseSchema=new Schema({

    img:{type: String, required: true},
    title: { type: String, required: true },
    level:{ type: String, required: true},
    workoutType:{ type: String, required:true},
    exercises:[{
        image:{type: String, required: true},
        exerciseName:{type: String, required: true}
    }]
    

});
module.exports=mongoose.model("Exercise" ,exerciseSchema);