import { useEffect, useRef} from 'react';

export const ModalContainer = ({children}) => {


    return (
        <div className="modal-container-background">
            {children}
        </div>
    )
}