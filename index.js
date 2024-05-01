const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const TaskRoute = require("./routes/TaskRoute");
const cors = require("cors");
const app = express();
app.use(cors());
dotEnv.config();


const PORT = process.env.PORT||4000

mongoose.connect(process.env.MONGO_URL)
.then(()=>(console.log("Mongo db connected succesfully")))
.catch((error)=>(console.log(error)));

app.use(bodyParser.json());
app.use("/Task",TaskRoute)

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})

app.use("/",(req,res)=>{
    res.send("Hi welcome to epimax");
})