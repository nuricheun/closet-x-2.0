import { connect } from "react-redux";
import { fetchAllItems } from "../../action/itemAction";
import { showModal } from '../../action/modalAction';
import { ItemIndex } from "./ItemIndex";

const mapStateToProps = ({session:{user:{id}}, entities:{items}}, ownProps) => {
  return {
    userId: id,
    items: Object.values(items)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllItems: (id) => dispatch(fetchAllItems(id)),
  showModal: (type) => dispatch(showModal(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex);
