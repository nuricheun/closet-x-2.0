import {connect} from 'react-redux'
import {ModalPage} from './ModalPage';
import {hideModal} from '../../action/modalAction';


const mapStateToProps = ({entities:{modal:{currentModal}}}) => ({
    whichModal:currentModal
})

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalPage)

