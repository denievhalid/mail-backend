import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import env from "./helpers/env.js";
import errorHandler from "./middlewares/errorHandler";
import { messageRoutes, userRoutes } from "./routes";

mongoose
  .connect(env("mongo_url"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use("/messages", messageRoutes);
    app.use("/users", userRoutes);

    app.use(errorHandler);

    app.listen(env("port"));
  });
