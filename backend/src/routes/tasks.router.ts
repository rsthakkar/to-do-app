// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Task from "../models/Task";
import TaskController from "../controllers/TaskController";

// Global Config
export const tasksRouter = express.Router();

tasksRouter.use(express.json());

// GET
tasksRouter.get("/", async (_req: Request, res: Response) => {
    return new TaskController(_req, res).getTaskData();
});
// tasksRouter.get("/", async (_req: Request, res: Response) => {
//     try {
//         const tasks = (await collections.tasks.find({}).toArray()) as unknown as Task[];

//         res.status(200).send(tasks);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// POST
tasksRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newTask = req.body as Task;
        console.log(newTask);
        const result = await collections.tasks.insertOne(newTask);

        result
            ? res.status(201).send(`Successfully created a new task with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new task.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});


// PUT

// DELETE