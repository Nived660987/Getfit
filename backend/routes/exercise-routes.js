const express=require("express");
const controllers=require("../controllers/exercise-controller");
const {check}=require("express-validator");
const router= express.Router();

   router.get("/:eid",controllers.getExerciseById)
  router.get("/",controllers.getExercise);
  router.post("/",controllers.createExercise);
  router.patch("/:eid",controllers.updateExercise);
  router.delete("/:eid",controllers.deleteExercise);

  module.exports=router;