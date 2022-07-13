import express from "express";
import { Project } from "../models/Project.js";

export const projectsRouter = express.Router();

// Get all projects
projectsRouter.get("/", async (req, res) => {
  const projectsAll = await Project.find();
  res.json(projectsAll);
});

// Get single project
projectsRouter.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
});
