import React, { useEffect } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndSignUpPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container fluid="lg">
      <Tabs defaultActiveKey="signIn" id="uncontrolled-tab-example">
        <Tab eventKey="signIn" title="Sign In">
          <SignIn />
        </Tab>
        <Tab eventKey="signUp" title="Sign Up">
          <SignUp />
        </Tab>
      </Tabs>
    </Container>
  );
};
export default SignInAndSignUpPage;
