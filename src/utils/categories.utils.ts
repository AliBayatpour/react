import { CategoryInterface } from "../interfaces/category.interface";

export const getCategories = async (token: string) => {
  const response = await fetch(
    "https://taltech.akaver.com/api/v1/TodoCategories",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (response.ok) {
    let categories = await response.json();
    return categories;
  }
  return [];
};

export const addCategory = async (
  category: CategoryInterface,
  token: string
) => {
  console.log(category);
  const response = await fetch(
    `https://taltech.akaver.com/api/v1/TodoCategories`,
    {
      method: "POST",
      body: JSON.stringify({ ...category }),
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

export const deleteCategory = async (
  category: CategoryInterface,
  token: string
) => {
  console.log(JSON.stringify(category));
  const response = await fetch(
    `https://taltech.akaver.com/api/v1/TodoCategories/${category.id}`,
    {
      method: "DELETE",
      body: JSON.stringify({ ...category }),
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
export const updateCategory = async (
  category: CategoryInterface,
  token: string
) => {
  const response = await fetch(
    `https://taltech.akaver.com/api/v1/TodoCategories/${category.id}`,
    {
      method: "PUT",
      body: JSON.stringify({ ...category }),
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
