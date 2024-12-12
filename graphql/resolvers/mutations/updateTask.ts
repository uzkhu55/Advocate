import { MutationResolvers } from "@/generated";
import { TaskModel } from "../../../model/task-model";

export const updateTask: MutationResolvers["updateTask"] = async (
  _,
  { _id, title, description, status }
) => {
  const updatedTask = await TaskModel.findByIdAndUpdate(_id, {
    title,
    description,
    status,
  });

  return updatedTask;
};
