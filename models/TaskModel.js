const mongoose = require("mongoose");

const Taskmodel = mongoose.Schema({
    SNo:{
        type:Number,
    },
    Task:{
        type:String,
        required:true
    },
    Deadline:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    },
    User:{
        type:String,
        required:true
    },
    Feedback:{
        type:String
    }
});


const TaskModel = mongoose.model("Tasks",Taskmodel);

module.exports = TaskModel 