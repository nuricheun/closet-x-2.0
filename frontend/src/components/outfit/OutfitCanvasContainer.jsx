import { connect } from "react-redux";
import { createOutfit } from "../../action/outfitAction"
import { withRouter } from "react-router";
import {OutfitCanvas} from "./OutfitCanvas2";

const mapStateToProps = ({session:{user:{id}}}, {onDrop, handleClear }) => {
  return {
    user: id,
    onDrop,
    handleClear
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createOutfit: outfit => dispatch(createOutfit(outfit))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OutfitCanvas))