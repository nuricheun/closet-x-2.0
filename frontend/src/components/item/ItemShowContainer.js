import { connect } from "react-redux";
import { fetchItem } from "../../action/item_action";
import ItemShow from "./ItemShow";

const mapStateToProps = (state, ownProps) => {
  if (!ownProps.itemId) {
    return {};
  }
  return {
    item: state.entities.items[ownProps.itemId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItem: id => dispatch(fetchItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemShow);
