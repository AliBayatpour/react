import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, Form } from "react-bootstrap";
import { signUpStart } from "../../redux/user/user.actions";
import { SignUpInterface } from "../../interfaces/sign-up.interface";
import styles from "./sign-up.module.scss";

interface Props {
  signUpStart: (userData: SignUpInterface) => void;
}
const SignIn: React.FC<Props> = ({ signUpStart }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = () => {
    signUpStart({ firstName, lastName, email, password });
  };

  return (
    <Form className={`${styles.formContainer} text-start`}>
      <Form.Group controlId="formSignUpFirstName" className="my-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formSignUpLastName" className="my-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your first name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formSignUpEmail" className="my-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formSignUpPassword" className="my-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        onClick={handleSubmit}
        className="mb-3"
      >
        Submit
      </Button>
    </Form>
  );
};

const mapStateToPorops = createStructuredSelector({});

const mapDispatchToProps = (dispatch: any) => ({
  signUpStart: (userData: SignUpInterface) => dispatch(signUpStart(userData)),
});
export default connect(mapStateToPorops, mapDispatchToProps)(SignIn);
