import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "default.png" },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "users",
  }
);

export const User = mongoose.model("User", UserSchema);
