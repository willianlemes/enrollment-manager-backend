import "dotenv/config";
import express from "express";
import "reflect-metadata";
import createConnection from "./database";
createConnection();

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    message: "Hello World",
  });
});

export default app;
