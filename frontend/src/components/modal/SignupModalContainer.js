import { connect } from "react-redux";
import { signup } from "../../action/sessionAction";
import { toggleSignupModal } from "../../action/modalAction";
import SignupModal from "./SignupModal";

const mapStateToProps = ({entities:{modal:{signupModal}}}) => {
  return {
    show: signupModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    toggleSignupModal: () => dispatch(toggleSignupModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModal);
