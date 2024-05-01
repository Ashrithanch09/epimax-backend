const TaskController = require("../controllers/TaskController");

const express = require("express");

const router = express.Router();

router.put("/updateTask/:TaskId",TaskController.updateTask);

router.post("/AddTask",TaskController.AddTask);

router.get("/AllTasks",TaskController.getAllTasks);

module.exports = router;