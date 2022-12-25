import * as dotenv from "dotenv";
import morgan from "morgan";
import express from "express";

dotenv.config();

function createApp() {
  const app = express();
  app.use(morgan("dev"));

  app.get("/", (_, res) => {
    return res.json({ message: "API Express + Jest + Supertest + TS 💛" });
  });

  return app;
}

export default createApp;
