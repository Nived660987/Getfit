const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const exerciseRoutes=require("./routes/exercise-routes");
const bodyParser=require("body-parser");
require("dotenv").config();

//set up express

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on: ${PORT}`));

// set up mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// set routes

app.use("/users", require("./routes/userRouter"));
app.use("/api/exercises",exerciseRoutes);
