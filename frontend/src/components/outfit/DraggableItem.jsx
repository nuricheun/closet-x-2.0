import {useState} from 'react';
import Draggable from 'react-draggable';
import './draggableitem.css'

export const DraggableItem = ({item}) => {

    const [deltaXYPos, setDeltaXYPos] = useState({x: 0, y: 0})

    const handleDrag = (e, d) => {
        const {x, y} = deltaXYPos;
        setDeltaXYPos({ x: x+d.deltaX, y: y+d.deltaY })
    }

    return(
        <Draggable onDrag={handleDrag}>
                <img className="drag-wrapper" src={item.src}/>          
        </Draggable>
    )
}