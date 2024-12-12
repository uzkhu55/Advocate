import { getAllTasks } from "@/graphql/resolvers/queries/getAllTasks";
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
          status: "active",
        },
      ])
      .mockReturnValueOnce(null),
  },
}));

describe("Get All Tasks", () => {
  it("should return all tasks", async () => {
    const result = await (getAllTasks as jest.Mock)(
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
        status: "active",
      },
    ]);
  });
});
