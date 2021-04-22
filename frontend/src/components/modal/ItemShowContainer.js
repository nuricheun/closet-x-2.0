import { connect } from "react-redux";
import { fetchItem } from "../../action/itemAction";
import { ItemShow } from "./ItemShow";

const mapStateToProps = ({entities:{modal:{itemFormModal}, items}}, ownProps) => {
  return {
    show: itemFormModal,
    item: items[ownProps.itemId]
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
