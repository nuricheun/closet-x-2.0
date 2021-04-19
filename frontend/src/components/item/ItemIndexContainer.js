import { connect } from "react-redux";
import { fetchAllItems } from "../../action/itemAction";
import { toggleItemModal, toggleNewModal } from '../../action/modalAction';
import {ItemIndex} from "./ItemIndex";

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
  toggleItemModal: () => dispatch(toggleNewModal()),
  toggleItemModal: () =>  dispatch(toggleItemModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);
