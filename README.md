# 🌲💼 Pinecone Advocate GraphQL Challenge 🚀

## 📋 Overview

Welcome to the **Pinecone Advocate GraphQL Challenge**! 🌟

In this challenge, you will:

- 🛠️ Learn how to write **GraphQL queries and mutations**
- 🧪 Test your code using **Jest** for unit tests

This guide will walk you through:

- ⚙️ Setting up your project
- 🖋️ Implementing GraphQL operations
- 🏃‍♂️ Running commands to test your solution

Let's dive in and make learning **GraphQL** fun and exciting! 😎

## ⚙️ Setup Instructions

Here’s how to get started with the project:

1. **Install Dependencies**:

   If you're using **Yarn**:

   ```bash
   yarn install

   ```

   Or, if you prefer npm:

   ```bash
   npm install
   ```

2. **Add your MongoDB Connection URL to .env File**:

   ```bash
   MONGODB_URL=YOUR_MONGODB_URL
   ```

   1. Once you've added your MongoDB connection string, start the project. If the connection is successful, you’ll see connection successful in the console. If there’s an issue, it will show connection Failed.

## 🚀 Required Mutations and Queries to complete challenges

In this challenge, you'll need to implement the following GraphQL operations:

### 1. **Mutations**:

- **`addTask`**:

  - This mutation creates a new todo task.
  - **Required fields**:

    - `taskName` (String) => required
    - `isDone` (Boolean) => default to `false`
    - `priority` (Int) => required
    - `createdAt` (Date)
    - `updatedAt` (Date)
    - `_id` (MongoDB Object Id)

- **`updateTask`**:
  - This mutation updates an existing task's details using its `taskId`.
  - **Fields to update**:
    - `taskName` (String)
    - `priority` (Int)
    - `isDone` (Boolean)

### 2. **Queries**:

- **`getDoneTasksLists`**:

  - This query retrieves all tasks that have been marked as done.

- **`getAllTasks`**:
  - This query fetches all active tasks.

## ⚙️ Command Instructions

Here’s how to run the project after implementing the GraphQL operations:

**Start the Project**:

To start the development server, run:

```bash
yarn dev
```

1. Then open [Apollo Studio Sandbox](https://studio.apollographql.com/sandbox/explorer) and add your local GraphQL endpoint (e.g., `http://localhost:3000/api/graphql`) to start testing your queries and mutations.

**Run Tests**:

To run your Jest tests and ensure everything works as expected, use:

```bash
yarn test
```

Good luck on the challenge! 🍀

Don't forget to read the **PDF file** for instructions on how to submit your challenge.

We hope you do great, and we look forward to seeing you in the **final interview**! 🎉
