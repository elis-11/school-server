import express from "express";
import { Course } from "../models/Course.js";

export const coursesRouter = express.Router();

// get all courses
coursesRouter.get("/", async (req, res) => {
  const coursesAll = await Course.find();
  res.json(coursesAll);
});

// get single course
coursesRouter.get("/:id", async (req, res) => {
  const courseId = req.params.id;
  console.log({ courseId });
  const course = await Course.findById(courseId);
  res.json(course);
});
