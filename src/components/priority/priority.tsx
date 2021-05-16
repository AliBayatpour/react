import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { UserInterface } from "../../interfaces/user";
import { PriorityInterface } from "../../interfaces/priority.interface";
import {
  deletePriorityStart,
  updatePriorityStart,
} from "../../redux/priorities/priorities.actions";

interface Props {
  data: PriorityInterface;
  deletePriorityStart: (priority: PriorityInterface, token: string) => void;
  updatePriorityStart: (priority: PriorityInterface, token: string) => void;
  currentUser: UserInterface;
}
const Priority: React.FC<Props> = ({
  data,
  deletePriorityStart,
  updatePriorityStart,
  currentUser,
}) => {
  const [name, setName] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    setName(data.priorityName);
    setSort(data.prioritySort);
    console.log("render");
  }, [data]);

  const deleteItem = () => {
    deletePriorityStart(
      {
        priorityName: name,
        prioritySort: sort,
        id: data.id,
      },
      currentUser.token
    );
  };

  const updateItem = () => {
    updatePriorityStart(
      {
        priorityName: name,
        prioritySort: sort,
        id: data.id,
      },
      currentUser.token
    );
  };

  return (
    <Form className={`text-start p-3 border my-3 border-primary rounded`}>
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
  deletePriorityStart: (priority: PriorityInterface, token: string) =>
    dispatch(deletePriorityStart(priority, token)),
  updatePriorityStart: (priority: PriorityInterface, token: string) =>
    dispatch(updatePriorityStart(priority, token)),
});
export default connect(mapStateToPorops, mapDispatchToProps)(Priority);
