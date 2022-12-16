import express from "express";
import { Challenge } from "../models/Challenge.js";

export const challengesRouter = express.Router();

// Get all challenges
challengesRouter.get("/", async (req, res) => {
  const challengesAll = await Challenge.find();
  res.json(challengesAll);
});

// Get single challenge
challengesRouter.get("/:id", async (req, res) => {
  const challenge = await Challenge.findById(req.params.id);
  res.json(challenge);
});

// Create challenge
challengesRouter.post("/", async (req, res, next) => {
  const { name } = req.body;
  console.log("create challenge:", req.body);

  const challengeExisting = await Challenge.findOne({ name });

  if (challengeExisting) {
    return res
      .status(400)
      .json({ error: `Challenges with name ${name} already exists!` });
  }
  try {
    const newChallenge = await Challenge.create(req.body);
    res.json(newChallenge);
  } catch (err) {
    next(err);
  }
});

// Delete
challengesRouter.delete("/:id", async (req, res) => {
  const challengeDelete = await Challenge.findByIdAndDelete(req.params.id);
  res.json(challengeDelete);
});

challengesRouter.patch("/:id", async (req, res) => {
  const challengeUpdate = await Challenge.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(challengeUpdate);
});
