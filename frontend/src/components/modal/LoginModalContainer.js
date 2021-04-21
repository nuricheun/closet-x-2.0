import { connect } from "react-redux";
import { login } from "../../action/sessionAction";
import { toggleSigninModal } from "../../action/modalAction";
import LoginModal from "./LoginModal";

const mapStateToProps = ({entities:{modal:{signinModal}}}) => ({
  show: signinModal
});

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    toggleSigninModal: () => dispatch(toggleSigninModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
