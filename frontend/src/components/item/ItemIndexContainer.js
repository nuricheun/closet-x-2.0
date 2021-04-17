import { connect } from "react-redux";
import { fetchAllItems } from "../../action/itemAction";
import ItemIndex from "./ItemIndex";

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.user.id,
    items: Object.values(state.entities.items)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllItems: (id) => dispatch(fetchAllItems(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);
