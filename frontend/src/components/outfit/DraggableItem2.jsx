import Draggable from 'react-draggable'
import './draggableitem2.css'

export const DraggableItem = ({imageURL}) => {

return (
    <Draggable>
        <img crossOrigin="Anonymous" className="drag-wrapper" src={imageURL} alt=""/>
    </Draggable>
    )

}