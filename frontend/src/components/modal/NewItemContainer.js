import { connect } from "react-redux";
import { createItem } from "../../action/itemAction";
import {hideModal} from '../../action/modalAction'
import ItemForm from "./ItemForm";

const mapStateToProps = ({session:{user:{id}}}, ownProps) => {
  return {
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
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm);
