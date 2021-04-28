import { useEffect, useRef, useMemo} from 'react';
import {ModalContainer} from '../modal/ModalContainer';
import { ModalForm } from './ModalForm';
import './modalPage.css';


export const ModalPage = ({whichModal}) => {
    
    const Modal = useMemo(() => {
        return ModalForm(whichModal)
    }, [whichModal])

    if (!whichModal) return null



    return (<ModalContainer>
                <Modal />
            </ModalContainer>) 
}
