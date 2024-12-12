import { getFinishedTasksLists } from "@/graphql/resolvers/queries/getFinishedTasksLists";
import { GraphQLResolveInfo } from "graphql";

jest.mock("../../model/task-model", () => ({
  TaskModel: {
    find: jest
      .fn()
      .mockReturnValueOnce([
        {
          _id: "1",
          title: "test",
          description: "test",
          status: "deleted",
        },
      ])
      .mockReturnValueOnce(null),
  },
}));

describe("Get All Tasks", () => {
  it("should return all tasks", async () => {
    const result = await (getFinishedTasksLists as jest.Mock)(
      {},
      {},
      {},
      {} as GraphQLResolveInfo
    );
    expect(result).toEqual([
      {
        _id: "1",
        title: "test",
        description: "test",
        status: "deleted",
      },
    ]);
  });
});
