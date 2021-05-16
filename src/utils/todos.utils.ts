import { TodoInterface } from "../interfaces/todo.interface";

export const getTodos = async (token: string) => {
  const response = await fetch("https://taltech.akaver.com/api/v1/TodoTasks", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  console.log(response);
  if (response.ok) {
    let todos = await response.json();
    return todos;
  }
  return [];
};

export const addTodo = async (todo: TodoInterface, token: string) => {
  const response = await fetch(`https://taltech.akaver.com/api/v1/TodoTasks`, {
    method: "POST",
    body: JSON.stringify({
      taskName: todo.taskName,
      taskSort: todo.taskSort,
      createdDt: new Date(),
      dueDt: "2021-04-30T15:52:04.511Z",
      isCompleted: true,
      isArchived: true,
      todoCategoryId: todo.todoCategoryId,
      todoPriorityId: todo.todoPriorityId,
    }),

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  }
};

export const deleteTodo = async (todo: TodoInterface, token: string) => {
  console.log(JSON.stringify(todo));
  const response = await fetch(
    `https://taltech.akaver.com/api/v1/TodoTasks/${todo.id}`,
    {
      method: "DELETE",
      body: JSON.stringify({ ...todo }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  if (response.ok) {
    console.log(response);
    return response;
  }
};
export const updateTodo = async (todo: TodoInterface, token: string) => {
  const response = await fetch(
    `https://taltech.akaver.com/api/v1/TodoTasks/${todo.id}`,
    {
      method: "PUT",
      body: JSON.stringify({ ...todo }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  if (response.ok) {
    return response;
  }
};
