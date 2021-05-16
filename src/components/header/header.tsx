import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../redux/user/user.actions";

interface Props {
  signOut: () => void;
}
const Header: React.FC<Props> = ({ signOut }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Homework</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/priorities">Priorities</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/categories">Categories</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/todos">Todos</Link>
        </Nav.Link>
        <Nav.Link onClick={signOut}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};
const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch(signOut()),
});
export default connect(null, mapDispatchToProps)(Header);
