import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { logout } from "../../action/sessionAction";
// import fetchOutfits

const mapStateToProps = state => {
  console.log(state.entities)
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
    // fetchOutfits: () => dispatch(fetchOutfits())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
