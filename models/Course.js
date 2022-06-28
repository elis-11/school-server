import mongoose from "mongoose";
const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    education: { type: String, required: true },
    language: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "courses",
  }
);
export const Course = mongoose.model("Course", CourseSchema);
