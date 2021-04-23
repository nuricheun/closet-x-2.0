import { connect } from "react-redux";
import { createItem } from "../../action/itemAction";
import {toggleNewFormModal} from '../../action/modalAction'
import ItemForm from "./ItemForm";

const mapStateToProps = ({entities:{modal:{newItemFormModal}}, session:{user:{id}}}, ownProps) => {
  return {
    show: newItemFormModal,
    item: {
      user: id,
      title: "",
      category: "",
      color: "",
      prevImgURL: null,
      image: null,
      imageURL: null
    },
    formType: "Create Item"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: item => dispatch(createItem(item)),
    toggleNewFormModal: () => dispatch(toggleNewFormModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm);
