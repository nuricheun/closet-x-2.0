import { useEffect, useRef} from 'react';
import {ModalTypes} from '../modal/modalType';
import SignupModal from '../modal/SignupModalContainer';
import LoginModal from '../modal/LoginModalContainer';
import NewItemModal from '../modal/NewItemContainer';
import ShowItemModal from '../modal/ItemShowContainer';


export const ModalForm = (whichModal) => {

//     const node = useRef();

//       useEffect(()=>{
        
//         if(whichModal){
//                 document.addEventListener('mousedown', handleClick)
//                 console.log(node)
//             }
            
//             return () => {
//                 document.removeEventListener('mousedown', handleClick)
//             }
        
//     }, [node])


    
//    const handleClick = (e) => {
//        console.log("hey there!", node)
//         if(node.current.contains(e.target)){
//             return ;
//         }
//         hideModal();
//     }

    let ModalOption = ""

    switch (whichModal) {
        case ModalTypes.SIGN_UP_MODAL:
            ModalOption =  SignupModal;
            break;
        case ModalTypes.LOG_IN_MODAL:
             ModalOption =  LoginModal; 
             break;
        case ModalTypes.NEW_ITEM_MODAL:
             ModalOption =  NewItemModal; 
             break;
        case ModalTypes.SHOW_ITEM_MODAL:
             ModalOption =  ShowItemModal;
             break;
        default:
            ModalOption = null
            break;
        }

        return ModalOption 

}