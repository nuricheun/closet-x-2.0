import { connect } from "react-redux";
import { login } from "../../action/sessionAction";
import LoginModal from "./LoginModal";

const mapStateToProps = (state, ownProps) => ({
  show: ownProps.show,
  hideLoginModal: ownProps.hideLoginModal
});

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
