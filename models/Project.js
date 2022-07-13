import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
    tools: { type: String, required: true },
    link: { type: String, required: true },
    github: { type: String, required: true}
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "projects",
  }
);
export const Project = mongoose.model("Project", ProjectSchema);

