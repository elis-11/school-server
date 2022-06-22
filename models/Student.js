import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    image: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    level: { type: String, required: true },
    specialized: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const Student = mongoose.model("Student", StudentSchema);
