import express from "express";
import { create, login, register } from "../controllers/UserController";

const router = express.Router();

router.post("/create", create);
router.post("/login", login);
router.post("/register", register);

export default router;
