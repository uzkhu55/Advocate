import { QueryResolvers } from "@/generated";
import { TaskModel } from "@/model/task-model";

export const getAllTasks: QueryResolvers["getAllTasks"] = async () => {
  const tasks = await TaskModel.find();

  return tasks;
};
