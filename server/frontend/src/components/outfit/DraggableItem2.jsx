import Draggable from 'react-draggable'
import './draggableitem2.css'

export const DraggableItem = ({imageURL}) => {

return (
    <Draggable>
        <div className="drag-wrapper">
            <img src={imageURL} alt=""/>
        </div>
    </Draggable>
    )

}