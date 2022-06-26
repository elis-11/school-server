import express from "express";
import {Staff} from "../models/Staff.js"

export const staffRouter = express.Router();

//Get all students
staffRouter.get("/", async (req, res) => {
    const staffAll= await Staff.find()
    res.json(staffAll)
})