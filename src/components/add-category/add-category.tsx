import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CategoryInterface } from "../../interfaces/category.interface";
import { connect } from "react-redux";
import { addCategoryStart } from "../../redux/categories/categories.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { UserInterface } from "../../interfaces/user";

interface Props {
  addCategoryStart: (category: CategoryInterface, token: string) => void;
  currentUser: UserInterface;
}
const AddCategory: React.FC<Props> = ({ addCategoryStart, currentUser }) => {
  const [name, setName] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  const addItem = () => {
    addCategoryStart(
      {
        categoryName: name,
        categorySort: sort,
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
        <Form.Label>Category Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Category Name"
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
  addCategoryStart: (category: CategoryInterface, token: string) =>
    dispatch(addCategoryStart(category, token)),
});
export default connect(mapStateToPorops, mapDispatchToProps)(AddCategory);
