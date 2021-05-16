import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { UserInterface } from "../../interfaces/user";
import { PriorityInterface } from "../../interfaces/priority.interface";
import { addPriorityStart } from "../../redux/priorities/priorities.actions";

interface Props {
  addPriorityStart: (priority: PriorityInterface, token: string) => void;
  currentUser: UserInterface;
}
const AddPriority: React.FC<Props> = ({ addPriorityStart, currentUser }) => {
  const [name, setName] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  const addItem = () => {
    addPriorityStart(
      {
        priorityName: name,
        prioritySort: sort,
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
        <Form.Label>Priority Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Priority Name"
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
});
const mapDispatchToProps = (dispatch: any) => ({
  addPriorityStart: (priority: PriorityInterface, token: string) =>
    dispatch(addPriorityStart(priority, token)),
});
export default connect(mapStateToPorops, mapDispatchToProps)(AddPriority);
