import { connect } from "react-redux";
import { fetchAllItems } from "../../action/itemAction";
import { hideModal } from '../../action/modalAction';
import { ItemIndex } from "./ItemIndex";

const mapStateToProps = ({session:{user:{id}}, entities:{items, modal:{currentModal}}}, ownProps) => {
  return {
    userId: id,
    items: Object.values(items),
    currentModal
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllItems: (id) => dispatch(fetchAllItems(id)),
  hideModal: () => dispatch(hideModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);
