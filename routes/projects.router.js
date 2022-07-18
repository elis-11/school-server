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

// Create project
projectsRouter.post("/", async (req, res, next) => {
  const { name } = req.body;
  console.log("create project:", req.body);

  const projectExisting = await Project.findOne({ name });

  if (projectExisting) {
    return res
      .status(400)
      .json({ error: `Project with name ${name} already exists!` });
  }
  try {
    const projectNew = await Project.create(req.body);
    res.json(projectNew);
  } catch (err) {
    next(err);
  }
});

// Delete
projectsRouter.delete("/:id", async (req, res) => {
  const projectDelete = await Project.findByIdAndDelete(req.params.id);
  res.json(projectDelete);
});

projectsRouter.patch("/:id", async (req, res) => {
  const projectUpdate = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(projectUpdate);
});
