import Task from "../models/Task";
import { Request, Response } from "express";
import { collections } from "../services/database.service";
import { BaseController } from "./BaseController";

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
}