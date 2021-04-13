import { connect } from "react-redux";
import { createItem } from "../../action/item_action";
import ItemForm from "./ItemForm";

const mapStateToProps = (state, ownProps) => {
  return {
    item: {
      user: state.session.user.id,
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
    action: item => dispatch(createItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm);
