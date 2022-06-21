import express from "express";
import { Teacher } from "../models/Teacher.js";

export const teachersRouter = express.Router();

// Get all teachers
teachersRouter.get("/", async (req, res) => {
  const teachersAll = await Teacher.find();
  res.json(teachersAll);
});
