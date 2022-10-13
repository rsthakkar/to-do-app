require("dotenv").config();

import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { tasksRouter } from './routes/tasks.router';
import { connectToDatabase } from './services/database.service';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const app = express();
const port = process.env.PORT;

connectToDatabase()
    .then(() => {
        app.use("/tasks", tasksRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });

        app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });

