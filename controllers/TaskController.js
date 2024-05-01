const Tasks = require("../models/TaskModel");


const AddTask = async(req,res)=>{
    const {Task,Deadline,Status,Feedback,User,SNo} = req.body;
    try{
        const newTask = new Tasks({
            SNo : SNo,
            Task : Task,
            Deadline : Deadline,
            Status : Status,
            Feedback : Feedback,
            User : User,
        });
        await newTask.save();
        res.status(201).json({message:"Task added succesfully"});
        //console.log("Task added succes:backend")
    }catch(error){
         res.status(500).json({error:`${error}`})
         //console.log(error);
    }

}

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await Tasks.find();
        //console.log(allTasks);
        res.status(200).json({allTasks:allTasks});
    } catch (error) {
        //console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const updateTask = async (req, res) => {
    const { feedback,statusvalue} = req.body;
    const  TaskId  = req.params.TaskId;
   // console.log(feedback,statusvalue);
   // console.log(TaskId);

    try {
        const task = await Tasks.findOne({SNo:TaskId}); 
       // console.log("task is this : ",task);

        if (task) {
            task.Feedback = feedback; 
            task.Status = statusvalue;
            await task.save(); 
            res.status(200).json({ message: "Feedback updated successfully" });
        } else {
            res.status(404).json({ error: "Task not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};


module.exports = {AddTask,updateTask,getAllTasks}