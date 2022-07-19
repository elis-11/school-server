import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    secondImage: { type: String },
    description: { type: String, required: true },
    tools: { type: String, required: true },
    link: { type: String, required: true },
    github: { type: String, required: true },
    backend: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "projects",
  }
);
export const Project = mongoose.model("Project", ProjectSchema);
