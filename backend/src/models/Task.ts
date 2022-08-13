import { ObjectId } from "mongodb";

export default class Task {
    constructor(
        public title: string,
        public description: string,
        public userId: number,
        public category: string,
        public id?: ObjectId
    ) {

    }
}
