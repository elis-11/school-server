import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    title: { type: String, required: true },
    experience: { type: Number, required: true },
    specialized: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const Teacher = mongoose.model("Teacher", TeacherSchema);
