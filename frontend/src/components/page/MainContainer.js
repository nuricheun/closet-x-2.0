import { connect } from "react-redux";
import { showModal } from "../../action/modalAction";
import { Main } from "./Main";

const mapDispatchToProps = dispatch => {
  return {
    showModal: (type) => dispatch(showModal(type))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Main);
