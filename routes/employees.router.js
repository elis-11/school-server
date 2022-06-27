import express from "express";
import { Employee } from "../models/Employee.js";

export const employeesRouter = express.Router();

//Get all students
employeesRouter.get("/", async (req, res) => {
  const employeeAll = await Employee.find();
  res.json(employeeAll);
});
