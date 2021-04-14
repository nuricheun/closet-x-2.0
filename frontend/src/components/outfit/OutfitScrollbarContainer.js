import { connect } from "react-redux";
import { fetchAllItems } from "../../action/itemAction";
import OutfitScrollbar from "./OutfitScrollbar";

const mapStateToProps = ({session:{user:{id}}, entities:{items}}) => {
  return {
    userId: id,
    items: Object.values(items),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllItems: (id) => dispatch(fetchAllItems(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutfitScrollbar);
