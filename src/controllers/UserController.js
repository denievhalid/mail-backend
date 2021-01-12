import express from "express";
import asyncHandler from "express-async-handler";
import UserService from "../services/UserService";

const router = express.Router();

router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const service = new UserService(req.body);

    const user = await service.login();

    return res.status(200).json(user);
  })
);

export default router;
