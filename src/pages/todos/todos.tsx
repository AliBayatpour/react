import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { UserInterface } from "../../interfaces/user";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Container } from "react-bootstrap";
import { getTodosStart } from "../../redux/todos/todos.actions";
import { TodoInterface } from "../../interfaces/todo.interface";
import { selectCurrentTodos } from "../../redux/todos/todos.selectors";
import AddTodo from "../../components/add-todo/add-todo";
import Todo from "../../components/todo/todo";
import Header from "../../components/header/header";
interface Props {
  currentUser: UserInterface;
  getTodosStart: (token: string) => void;
  todos: TodoInterface[];
}
const Todos: React.FC<Props> = ({ getTodosStart, currentUser, todos }) => {
  useEffect(() => {
    getTodosStart(currentUser.token);
  }, []);
  return (
    <Container fluid="lg" className="p-3">
      <Header />
      <h4 className="w-100 bg-danger text-white">
        Notice that you have to have at least one Category and one Priority if
        you want to add Todo
      </h4>
      <AddTodo />
      {todos.length
        ? todos.map((todos, idx) => <Todo key={idx} data={todos} />)
        : null}
    </Container>
  );
};

const mapStateToPorops = createStructuredSelector({
  currentUser: selectCurrentUser,
  todos: selectCurrentTodos,
});
const mapDispatchToProps = (dispatch: any) => ({
  getTodosStart: (token: string) => dispatch(getTodosStart(token)),
});
export default connect(mapStateToPorops, mapDispatchToProps)(Todos);
