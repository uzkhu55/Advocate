import { MutationResolvers } from "@/generated";
import { TaskModel } from "../../../model/task-model";
export const addTask: MutationResolvers["addTask"] = async (
  _,
  { title, description }
) => {
  const newTask = await TaskModel.create({
    title,
    description,
    status: "active",
  });
  return newTask;
};
