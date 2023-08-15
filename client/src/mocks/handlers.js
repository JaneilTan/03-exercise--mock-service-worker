import { rest } from "msw";

// Check `server/index.js`. What is the GET "/api/todos" response?
// TODO: Assign a value to the `getTodosMockResponse` variable
export const getTodosMockResponse

// Check `server/index.js`. What is the DELETE "/api/todos/:id" response?
// TODO: Assign a value to the `deleteTodoMockResponse` variable
const deleteTodoMockResponse

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/todos`, (req, res, ctx) => {
    return res(ctx.json(getTodosMockResponse));
  }),

  rest.delete(
    `${process.env.REACT_APP_API_URL}/todos/:todoId`,
    (req, res, ctx) => {
      return res(ctx.json(deleteTodoMockResponse));
    }
  ),
];
