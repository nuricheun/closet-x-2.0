import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { logout } from "../../action/sessionAction";

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
    // fetchOutfits: () => dispatch(fetchOutfits())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Dashboard);
