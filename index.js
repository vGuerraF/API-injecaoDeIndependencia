import express, { Router } from "express";
import cors from "cors";

import { MongoDbConnection } from "./database/mongo/connection/connect.js";
import { makeUserFactory } from "./factories/user.js";
import { makeCharacterFactory } from "./factories/character.js";
import swaggerUi from "swagger-ui-express";
import autoSwagger from "./swagger_output.json" assert { type: "json" };

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const app = express();
const router = Router();
app.use(express.json);
app.use(cors());

const user = makeUserFactory(router);
const character = makeCharacterFactory(router);

app.use("/api/docs", swaggerUi.serve);
app.get("/api/docs", swaggerUi.setup(autoSwagger));
app.use("/users", user.route());
app.use("/characters", character.route());

app.listen(3000, () => {
  console.log("servidor rodando em: http://localhost:3000");
});
