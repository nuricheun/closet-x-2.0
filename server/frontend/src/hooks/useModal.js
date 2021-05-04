import {useRef, useEffect} from 'react'

export const useModalRef = (hideModal) => {

    const node = useRef();

    useEffect(()=>{    

        document.addEventListener('mousedown', handleClick)
    
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
        
    }, [node])

    const handleClick = (e) => {
    
        if(node.current.contains(e.target)){
            return ;
        }
        hideModal();
    }

    return node

}