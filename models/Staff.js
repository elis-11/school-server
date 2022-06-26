import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    city: { type: String, required: true },
    role: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: Number, required: true },
    specialized: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export const Staff = mongoose.model("Staff", StaffSchema);
