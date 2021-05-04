import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import {NavBar} from "./Navbar";
import { logout } from "../../action/sessionAction";
import { showModal } from '../../action/modalAction'

const mapStateToProps = (state, ownProps) => ({
  match: ownProps.match
})

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    showModal: (type) => dispatch(showModal(type))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));