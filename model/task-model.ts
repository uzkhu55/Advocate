import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["active", "deleted"], default: "active" },
});

export const TaskModel =
  mongoose.models.Task || mongoose.model("Task", TaskSchema);
