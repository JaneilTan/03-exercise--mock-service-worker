import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { getTodosMockResponse as todos } from "./mocks/handlers";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("The app renders", () => {
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
  });

  test("All todos are rendered", async () => {
    // See https://testing-library.com/docs/dom-testing-library/api-async/#waitfor
    await waitFor(() => {
      todos.forEach((todo) => {
        // TODO: assert that each of the todos is rendered
        // Use getByRole() https://testing-library.com/docs/queries/byrole/
        expect(
          screen.getByRole("cell", { name: todo.description })
        ).toBeInTheDocument();
      });
    });
  });

  test("A todo is deleted", async () => {
    // TODO: Start by "waiting" for the todos to be rendered (See the "All todos are rendered" test)
    await waitFor(() => {
      todos.forEach((todo) => {
        expect(
          screen.getByRole("cell", { name: todo.description })
        ).toBeInTheDocument();
      });
      
    });

    const firstTodoRow = screen.getByText(todos[0].description).closest("tr");
    const deleteButton = within(firstTodoRow).getByRole("button", {
      name: /delete/i,
    });

    // TODO:  Simulate a click on the DELETE button
    // See https://testing-library.com/docs/ecosystem-user-event/
    userEvent.click(deleteButton)
    await waitFor(() => {
      // TODO: assert that the deleted todo is not in the document
      expect(deleteButton).not.toBeInTheDocument();
    });
  });
});
