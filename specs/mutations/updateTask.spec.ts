/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { updateTask } from "@/graphql/resolvers/mutations/updateTask";
import { GraphQLResolveInfo } from "graphql";

jest.mock("../../model/task-model", () => ({
  TaskModel: {
    findByIdAndUpdate: jest
      .fn()
      .mockReturnValueOnce({
        _id: "1",
        status: "deleted",
      })
      .mockReturnValueOnce(null),
  },
}));

describe("update task", () => {
  it("should update a task", async () => {
    const result = await (updateTask as jest.Mock)(
      {},
      { name: "test" },
      {},
      {} as GraphQLResolveInfo
    );

    expect(result).toEqual({
      _id: "1",
      status: "deleted",
    });
  });
  it("should throw an error if the author doesn't exist", async () => {
    try {
      await (updateTask as jest.Mock)!(
        {},
        { _id: "1", status: "test" },
        {},
        {} as GraphQLResolveInfo
      );
    } catch (error) {
      expect(error).toEqual(new Error("Author not found"));
    }
  });
});
