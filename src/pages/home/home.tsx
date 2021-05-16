import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";

interface Props {}
const HomePage: React.FC<Props> = () => {
  return (
    <Container fluid="lg">
      <Header />
      <h3 className="text-secondary my-3">Hi Welcome to this small App</h3>
      <h4 className="text-secondary mb-4">
        Which part of the App you wanna go?
      </h4>
      <div className="list-group">
        <Link
          className="list-group-item bg-primary text-white border-white"
          to={process.env.PUBLIC_URL + "/categories"}
        >
          Categories
        </Link>
        <Link
          className="list-group-item bg-primary text-white border-white"
          to={process.env.PUBLIC_URL + "/priorities"}
        >
          Priorities
        </Link>
        <Link
          className="list-group-item bg-primary text-white border-white"
          to={process.env.PUBLIC_URL + "/todos"}
        >
          Todos
        </Link>
      </div>
    </Container>
  );
};
export default HomePage;
