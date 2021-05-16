import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { UserInterface } from "./interfaces/user";
import HomePage from "./pages/home/home";
import Categories from "./pages/categories/categories";
import Priorities from "./pages/priorities/priorities";
import Todos from "./pages/todos/todos";

interface Props {
  currentUser: UserInterface;
}
const App: React.FC<Props> = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          render={() =>
            currentUser ? (
              <HomePage />
            ) : (
              <Redirect to={process.env.PUBLIC_URL + "/auth"} />
            )
          }
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/categories"}
          render={() =>
            currentUser ? (
              <Categories />
            ) : (
              <Redirect to={process.env.PUBLIC_URL + "/auth"} />
            )
          }
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/priorities"}
          render={() =>
            currentUser ? (
              <Priorities />
            ) : (
              <Redirect to={process.env.PUBLIC_URL + "/auth"} />
            )
          }
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/todos"}
          render={() =>
            currentUser ? (
              <Todos />
            ) : (
              <Redirect to={process.env.PUBLIC_URL + "/auth"} />
            )
          }
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/auth"}
          render={() =>
            currentUser ? (
              <Redirect to={process.env.PUBLIC_URL + "/"} />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </Switch>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(App);
