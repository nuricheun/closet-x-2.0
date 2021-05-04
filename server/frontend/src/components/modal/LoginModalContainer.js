import { connect } from "react-redux";
import { login } from "../../action/sessionAction";
import { hideModal } from "../../action/modalAction";
import LoginModal from "./LoginModal";

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginModal);
