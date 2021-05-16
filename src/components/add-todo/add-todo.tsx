import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { UserInterface } from "../../interfaces/user";
import { TodoInterface } from "../../interfaces/todo.interface";
import { addTodoStart } from "../../redux/todos/todos.actions";
import { selectCurrentCategories } from "../../redux/categories/categories.selectors";
import { selectCurrentPriorities } from "../../redux/priorities/priorities.selectors";
import { getCategoriesStart } from "../../redux/categories/categories.actions";
import { getPrioritiesStart } from "../../redux/priorities/priorities.actions";
import { PriorityInterface } from "../../interfaces/priority.interface";
import { CategoryInterface } from "../../interfaces/category.interface";

interface Props {
  addTodoStart: (priority: TodoInterface, token: string) => void;
  getCategoriesStart: (token: string) => void;
  getPrioritiesStart: (token: string) => void;
  currentUser: UserInterface;
  priorities: PriorityInterface[];
  categories: CategoryInterface[];
}
const AddTodo: React.FC<Props> = ({
  addTodoStart,
  currentUser,
  priorities,
  categories,
  getPrioritiesStart,
  getCategoriesStart,
}) => {
  const [name, setName] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    getPrioritiesStart(currentUser.token);
    getCategoriesStart(currentUser.token);
  }, []);

  const addItem = () => {
    addTodoStart(
      {
        taskName: name,
        taskSort: sort,
        todoCategoryId: categories[0].id,
        todoPriorityId: priorities[0].id,
      },
      currentUser.token
    );
    setName("");
    setSort("");
  };

  return (
    <Form
      className={`text-start p-3 border my-3 border-primary rounded bg-warning`}
    >
      <Form.Group controlId="formSigninEmail" className="my-3">
        <Form.Label>Todo Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Todo Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formSigninPassword" className="my-3">
        <Form.Label>Sort</Form.Label>
        <Form.Control
          type="number"
          placeholder="Sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={addItem} className="m-3">
        Add
      </Button>
    </Form>
  );
};

const mapStateToPorops = createStructuredSelector({
  currentUser: selectCurrentUser,
  categories: selectCurrentCategories,
  priorities: selectCurrentPriorities,
});
const mapDispatchToProps = (dispatch: any) => ({
  addTodoStart: (todo: TodoInterface, token: string) =>
    dispatch(addTodoStart(todo, token)),
  getCategoriesStart: (token: string) => dispatch(getCategoriesStart(token)),
  getPrioritiesStart: (token: string) => dispatch(getPrioritiesStart(token)),
});
export default connect(mapStateToPorops, mapDispatchToProps)(AddTodo);
