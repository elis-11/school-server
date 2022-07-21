import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "default.png" },
    email: { type: String, required: true },
    group: { type: String, default: "user, member"},
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: "users",
  }
);

export const User = mongoose.model("User", UserSchema);
