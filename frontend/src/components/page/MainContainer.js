import { connect } from "react-redux";
import { toggleSignupModal, toggleSigninModal, showModal } from "../../action/modalAction";
import { Main } from "./Main";

const mapStateToProps = ({entities:{modal: {signupModal}}}) => {
  return {
    show: signupModal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSignupModal: () => dispatch(toggleSignupModal()),
    toggleSigninModal: () => dispatch(toggleSigninModal()),
    showModal: (type) => dispatch(showModal(type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
