
import { MongoDbConnection } from "./database/mongo/connection/connect.js";


const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();




