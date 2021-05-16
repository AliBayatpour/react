import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CategoryInterface } from "../../interfaces/category.interface";
import { connect } from "react-redux";
import {
  deleteCategoryStart,
  updateCategoryStart,
} from "../../redux/categories/categories.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { UserInterface } from "../../interfaces/user";

interface Props {
  data: CategoryInterface;
  deleteCategoryStart: (category: CategoryInterface, token: string) => void;
  updateCategoryStart: (category: CategoryInterface, token: string) => void;
  currentUser: UserInterface;
}
const Category: React.FC<Props> = ({
  data,
  deleteCategoryStart,
  updateCategoryStart,
  currentUser,
}) => {
  const [name, setName] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    setName(data.categoryName);
    setSort(data.categorySort);
    console.log("render");
  }, [data]);

  const deleteItem = () => {
    deleteCategoryStart(
      {
        categoryName: name,
        categorySort: sort,
        id: data.id,
      },
      currentUser.token
    );
  };

  const updateItem = () => {
    updateCategoryStart(
      {
        categoryName: name,
        categorySort: sort,
        id: data.id,
      },
      currentUser.token
    );
  };

  return (
    <Form className={`text-start p-3 border my-3 border-primary rounded`}>
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
  deleteCategoryStart: (category: CategoryInterface, token: string) =>
    dispatch(deleteCategoryStart(category, token)),
  updateCategoryStart: (category: CategoryInterface, token: string) =>
    dispatch(updateCategoryStart(category, token)),
});
export default connect(mapStateToPorops, mapDispatchToProps)(Category);
