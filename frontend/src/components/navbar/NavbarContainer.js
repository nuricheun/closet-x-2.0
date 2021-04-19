import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import {NavBar} from "./Navbar";
import { logout } from "../../action/sessionAction";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));