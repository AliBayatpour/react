import { PriorityInterface } from "../interfaces/priority.interface";

export const getPriorities = async (token: string) => {
  const response = await fetch(
    "https://taltech.akaver.com/api/v1/TodoPriorities",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  console.log(response);
  if (response.ok) {
    let priorities = await response.json();
    return priorities;
  }
  return [];
};

export const addPriority = async (
  priority: PriorityInterface,
  token: string
) => {
  const response = await fetch(
    `https://taltech.akaver.com/api/v1/TodoPriorities`,
    {
      method: "POST",
      body: JSON.stringify({ ...priority }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  }
};

export const deletePriority = async (
  priority: PriorityInterface,
  token: string
) => {
  console.log(JSON.stringify(priority));
  const response = await fetch(
    `https://taltech.akaver.com/api/v1/TodoPriorities/${priority.id}`,
    {
      method: "DELETE",
      body: JSON.stringify({ ...priority }),
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
export const updatePriority = async (
  priority: PriorityInterface,
  token: string
) => {
  const response = await fetch(
    `https://taltech.akaver.com/api/v1/TodoPriorities/${priority.id}`,
    {
      method: "PUT",
      body: JSON.stringify({ ...priority }),
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
