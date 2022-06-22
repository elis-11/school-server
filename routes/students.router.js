import express from "express";
import {Student} from "../models/Student.js"

export const studentsRouter = express.Router();

//Get all students
studentsRouter.get("/", async (req, res) => {
    const studentsAll= await Student.find()
    res.json(studentsAll)
})