import { connect } from "react-redux";
import { signup } from "../../action/sessionAction";
import { hideModal } from "../../action/modalAction";
import SignupModal from "./SignupModal";

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignupModal);
