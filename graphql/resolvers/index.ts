import { addTask } from "./mutations/add-task";
import { getAllTasks } from "./queries/getAllTasks";
import { updateTask } from "./mutations/updateTask";
import { helloQuery } from "./queries/hello-query";
import { getFinishedTasksLists } from "./queries/getFinishedTasksLists";
import { sayHello } from "./mutations/say-hello";

export const resolvers = {
  Query: {
    helloQuery,
    getAllTasks,
    getFinishedTasksLists,
  },
  Mutation: {
    addTask,
    updateTask,
    sayHello,
  },
};
