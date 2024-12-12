/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { addTask } from "@/graphql/resolvers/mutations/add-task";
import { GraphQLResolveInfo } from "graphql";

jest.mock("../../model/task-model", () => ({
  TaskModel: {
    create: jest
      .fn()
      .mockReturnValueOnce({
        _id: "1",
        name: "test",
        title: "test title",
        description: "test description",
        status: "active",
      })
      .mockReturnValueOnce(null),
  },
}));

describe("add task", () => {
  it("should add a task", async () => {
    const result = await (addTask as jest.Mock)(
      {},
      { name: "test" },
      {},
      {} as GraphQLResolveInfo
    );

    expect(result).toEqual({
      _id: "1",
      name: "test",
      title: "test title",
      description: "test description",
      status: "active",
    });
  });
});
