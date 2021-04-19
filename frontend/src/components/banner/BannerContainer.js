import { connect } from "react-redux";
import Banner from "./Banner";
import { logout } from "../../action/sessionAction";

const mapStateToProps = start => {
  return {

  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mDTP)(Banner);