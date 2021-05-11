import { connect } from "react-redux";
import { fetchItem } from "../../action/itemAction";
import { ItemShow } from "./ItemShow";

const mapStateToProps = ({entities:{items}}, {itemId}) => {
  return {
    item: items[itemId]
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
