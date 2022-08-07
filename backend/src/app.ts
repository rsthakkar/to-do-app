require("dotenv").config();

import express from 'express';
import { MongoClient, ServerApiVersion }  from 'mongodb'; 


const app = express();
const port = 3000;

const client = new MongoClient(process.env.MONGO_URI);
client.connect().then(() => {console.log("connected")});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

