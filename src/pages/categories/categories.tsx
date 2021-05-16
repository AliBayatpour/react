import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { UserInterface } from "../../interfaces/user";
import { getCategoriesStart } from "../../redux/categories/categories.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCurrentCategories } from "../../redux/categories/categories.selectors";
import { CategoryInterface } from "../../interfaces/category.interface";
import Category from "../../components/category/category";
import { Container } from "react-bootstrap";
import AddCategory from "../../components/add-category/add-category";
import Header from "../../components/header/header";
interface Props {
  currentUser: UserInterface;
  getCategoriesStart: (token: string) => void;
  categories: CategoryInterface[];
}
const Categories: React.FC<Props> = ({
  getCategoriesStart,
  currentUser,
  categories,
}) => {
  useEffect(() => {
    getCategoriesStart(currentUser.token);
  }, []);
  return (
    <Container fluid="lg" className="p-3">
      <Header />
      <h4 className="w-100 bg-danger text-white">
        Notice that you can't delete a category if it has a todo, so first
        delete its todo then delete the category
      </h4>
      <AddCategory />
      {categories.length
        ? categories.map((category, idx) => (
            <Category key={idx} data={category} />
          ))
        : null}
    </Container>
  );
};

const mapStateToPorops = createStructuredSelector({
  currentUser: selectCurrentUser,
  categories: selectCurrentCategories,
});
const mapDispatchToProps = (dispatch: any) => ({
  getCategoriesStart: (token: string) => dispatch(getCategoriesStart(token)),
});
export default connect(mapStateToPorops, mapDispatchToProps)(Categories);
