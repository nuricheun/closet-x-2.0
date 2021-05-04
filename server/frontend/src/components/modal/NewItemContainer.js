import { connect } from "react-redux";
import { createItem } from "../../action/itemAction";
import { fetchItem } from "../../action/itemAction";
import { hideModal } from '../../action/modalAction'
import ItemForm from "./ItemForm";

const mapStateToProps = ({session:{user:{currentUser}}}, ownProps) => {
  return {
    currentUser,
    item: null,
    formType: "Create Item"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: item => dispatch(createItem(item)),
    fetchItem : (id) => dispatch(fetchItem(id)),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm);
