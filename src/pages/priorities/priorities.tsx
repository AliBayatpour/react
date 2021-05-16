import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { UserInterface } from "../../interfaces/user";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Container } from "react-bootstrap";
import { getPrioritiesStart } from "../../redux/priorities/priorities.actions";
import { selectCurrentPriorities } from "../../redux/priorities/priorities.selectors";
import { PriorityInterface } from "../../interfaces/priority.interface";
import AddPriority from "../../components/add-priority/add-priority";
import Priority from "../../components/priority/priority";
import Header from "../../components/header/header";
interface Props {
  currentUser: UserInterface;
  getPrioritiesStart: (token: string) => void;
  priorities: PriorityInterface[];
}
const Priorities: React.FC<Props> = ({
  getPrioritiesStart,
  currentUser,
  priorities,
}) => {
  useEffect(() => {
    getPrioritiesStart(currentUser.token);
  }, []);
  return (
    <Container fluid="lg" className="p-3">
      <Header />
      <h4 className="w-100 bg-danger text-white">
        Notice that you can't delete a priority if it has a todo, so first
        delete its todo then delete the priority
      </h4>
      <AddPriority />
      {priorities.length
        ? priorities.map((priorities, idx) => (
            <Priority key={idx} data={priorities} />
          ))
        : null}
    </Container>
  );
};

const mapStateToPorops = createStructuredSelector({
  currentUser: selectCurrentUser,
  priorities: selectCurrentPriorities,
});
const mapDispatchToProps = (dispatch: any) => ({
  getPrioritiesStart: (token: string) => dispatch(getPrioritiesStart(token)),
});
export default connect(mapStateToPorops, mapDispatchToProps)(Priorities);
