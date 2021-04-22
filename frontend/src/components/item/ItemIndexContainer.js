import { connect } from "react-redux";
import { fetchAllItems } from "../../action/itemAction";
import { toggleItemFormModal, toggleNewFormModal } from '../../action/modalAction';
import { ItemIndex } from "./ItemIndex";

const mapStateToProps = ({session:{user:{id}}, entities:{items, modal:{itemModal, newModal}}}, ownProps) => {
  return {
    userId: id,
    items: Object.values(items),
    itemModal,
    newModal
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllItems: (id) => dispatch(fetchAllItems(id)),
  toggleNewFormModal: () => dispatch(toggleNewFormModal()),
  toggleItemFormModal: () =>  dispatch(toggleItemFormModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);
