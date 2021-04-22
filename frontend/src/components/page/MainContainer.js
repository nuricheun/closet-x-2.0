import { connect } from "react-redux";
import { toggleSignupModal, toggleSigninModal } from "../../action/modalAction";
import {Main} from "./Main";

const mapStateToProps = ({entities:{modal: {signupModal}}}) => {
  return {
    show: signupModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSignupModal: () => dispatch(toggleSignupModal()),
    toggleSigninModal: () => dispatch(toggleSigninModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
