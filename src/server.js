import express from "express";
import mongoose from "mongoose";
import env from "./helpers/env";
import initRoutes from "./helpers/initRoutes";
import initMiddlewares from "./helpers/initMiddlewares";

mongoose
  .connect(env("mongo_url"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();

    initMiddlewares(app);
    initRoutes(app);

    app.listen(env("port"));
  });
