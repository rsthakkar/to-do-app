// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Task from "../models/Task";

// Global Config
export const tasksRouter = express.Router();

tasksRouter.use(express.json());

// GET
tasksRouter.get("/", async (_req: Request, res: Response) => {
    try {
        const tasks = (await collections.tasks.find({}).toArray()) as unknown as Task[];

        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// POST

// PUT

// DELETE