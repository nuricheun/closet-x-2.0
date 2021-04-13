import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import NavBar from "./Navbar";
import { logout } from "../../action/session_action";

const mstp = state => {
  return {};
};

const mdtp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mstp, mdtp)(NavBar));