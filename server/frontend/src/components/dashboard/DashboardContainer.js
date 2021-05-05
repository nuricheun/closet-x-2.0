import { connect } from "react-redux";
import {Dashboard} from "./Dashboard";
import { logout } from "../../action/sessionAction";
import {fetchAllOutfits} from '../../action/outfitAction';

const mapStateToProps = ({entities: {outfits}}) => ({
  outfits
})


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllOutfits: () => dispatch(fetchAllOutfits())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
