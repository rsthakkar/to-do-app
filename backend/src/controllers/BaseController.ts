import { Request, Response } from "express";

export class BaseController {
    public _req: Request;
    public res: Response;
    constructor(_req: Request, res: Response) {
        console.log(_req);
        this._req = _req;
        this.res = res;
    }
}