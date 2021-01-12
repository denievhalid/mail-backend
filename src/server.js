import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import env from "./helpers/env.js";

mongoose.connect(
  env("mongo_url"),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.listen(env("port"));
  }
);
