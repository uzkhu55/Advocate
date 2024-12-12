import { QueryResolvers } from "@/generated";
import { TaskModel } from "@/model/task-model";

export const getFinishedTasksLists: QueryResolvers["getFinishedTasksLists"] =
  async (_, {}) => {
    const tasks = await TaskModel.find({ status: "deleted" });

    return tasks;
  };
