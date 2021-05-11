import { connect } from "react-redux";
import Banner from "./Banner";
import { logout } from "../../action/sessionAction";

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null, mapDispatchToProps)(Banner);