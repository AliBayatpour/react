import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { UserInterface } from "../../interfaces/user";
import { TodoInterface } from "../../interfaces/todo.interface";
import {
  deleteTodoStart,
  updateTodoStart,
} from "../../redux/todos/todos.actions";

interface Props {
  data: TodoInterface;
  deleteTodoStart: (todo: TodoInterface, token: string) => void;
  updateTodoStart: (todo: TodoInterface, token: string) => void;
  currentUser: UserInterface;
}
const Todo: React.FC<Props> = ({
  data,
  deleteTodoStart,
  updateTodoStart,
  currentUser,
}) => {
  const [name, setName] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    setName(data.taskName);
    setSort(data.taskSort);
    console.log("render");
  }, [data]);

  const deleteItem = () => {
    deleteTodoStart(
      {
        ...data,
      },
      currentUser.token
    );
  };

  const updateItem = () => {
    updateTodoStart(
      {
        ...data,
        taskName: name,
        taskSort: sort,
      },
      currentUser.token
    );
  };

  return (
    <Form className={`text-start p-3 border my-3 border-primary rounded`}>
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
      <Button
        variant="primary"
        type="button"
        onClick={deleteItem}
        className="m-3"
      >
        Delete
      </Button>
      <Button
        variant="primary"
        type="button"
        onClick={updateItem}
        className="my-3"
      >
        Update
      </Button>
    </Form>
  );
};

const mapStateToPorops = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch: any) => ({
  deleteTodoStart: (todo: TodoInterface, token: string) =>
    dispatch(deleteTodoStart(todo, token)),
  updateTodoStart: (todo: TodoInterface, token: string) =>
    dispatch(updateTodoStart(todo, token)),
});
export default connect(mapStateToPorops, mapDispatchToProps)(Todo);
