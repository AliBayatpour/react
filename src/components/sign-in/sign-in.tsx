import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { signInStart } from "../../redux/user/user.actions";
import { SignInInterface } from "../../interfaces/sign-in.interface";
import styles from "./sign-in.module.scss";

interface Props {
  signInStart: (userData: SignInInterface) => void;
}
const SignIn: React.FC<Props> = ({ signInStart }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = () => {
    signInStart({ email, password });
  };

  return (
    <Form className={`${styles.formContainer} text-start`}>
      <Form.Group controlId="formSigninEmail" className="my-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formSigninPassword" className="my-3">
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
        className="my-3"
      >
        Submit
      </Button>
    </Form>
  );
};


const mapDispatchToProps = (dispatch: any) => ({
  signInStart: (userData: SignInInterface) => dispatch(signInStart(userData)),
});
export default connect(null, mapDispatchToProps)(SignIn);
