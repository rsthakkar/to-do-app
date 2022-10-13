import Task from "../models/Task";
import { Request, Response } from "express";
import { collections } from "../services/database.service";
import { BaseController } from "./BaseController";

export let taskSwagger = {
    '/tasks': {
        "get": {
            "tags": [
                "Tasks"
            ],
            "summary": "Get all cats in system",
            "responses": {
                "200": {
                    "description": "OK"
                }
            }
        }
    }
};

export default class TaskController extends BaseController {
    constructor(_req: Request, res: Response) {
        super(_req, res);
    }

    public async getTaskData() {
        try {
            const tasks = (await collections.tasks.find({}).toArray()) as unknown as Task[];

            this.res.status(200).send(tasks);
        } catch (error) {
            this.res.status(500).send(error.message);
        }
    }

    public async addNewTask() {
        try {
            const newTask = this._req.body as Task;
            console.log(newTask);
            const result = await collections.tasks.insertOne(newTask);

            result
                ? this.res.status(201).send(`Successfully created a new task with id ${result.insertedId}`)
                : this.res.status(500).send("Failed to create a new task.");
        } catch (error) {
            console.error(error);
            this.res.status(400).send(error.message);
        }
    }
}



