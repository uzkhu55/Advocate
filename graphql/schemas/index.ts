import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Task {
    _id: ID!
    title: String!
    description: String
    status: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getAllTasks: [Task!]!
    getFinishedTasksLists: [Task!]!
  }

  type Mutation {
    addTask(title: String!, description: String): Task!
    updateTask(
      _id: ID!
      title: String
      description: String
      status: String
    ): Task!
  }
`;
