import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserController from "./controllers/UserController";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const { MONGO_URL, PORT } = process.env;

(async () => {
  try {
    const app = express();

    app.use(cors());
    app.use(json());
    app.use(urlencoded({ extended: false }));

    app.use("/users", UserController);

    app.use(errorHandler);

    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT);
  } catch (e) {
    process.exit(1);
  }
})();
