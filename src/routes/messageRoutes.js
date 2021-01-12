import express from "express";
import {
  getById,
  getByFolder,
  changeFolder,
} from "../controllers/MessageController";

const router = express.Router();

router.get("/:folder", getByFolder);
router.get("/:folder/:id", getById);
router.patch("/", changeFolder);

export default router;
