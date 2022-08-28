// External Dependencies
import * as mongoDB from "mongodb";

// Global Variables
export const collections: { 
    tasks?: mongoDB.Collection 
} = {}

// Initialize Connection
export async function connectToDatabase() {

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGO_URI);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    // const gamesCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME);
    const taskCollection:mongoDB.Collection = db.collection('tasks');

    collections.tasks = taskCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${taskCollection.collectionName}`);
}