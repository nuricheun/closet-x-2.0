import { connect } from "react-redux";
import { updateItem, fetchItem } from "../../action/item_action";
import { withRouter } from "react-router-dom";
import ItemForm from "./ItemForm";

const mapStateToProps = ({entities:{items}}, {match:{params:{itemId}}}) => ({
    item: items[itemId],
    formType: "Update Item"
});

const mapDispatchProps = dispatch => ({
    fetchItem: id => dispatch(fetchItem(id)),
    action: (item, id) => dispatch(updateItem(item, id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchProps
  )(ItemForm)
);
