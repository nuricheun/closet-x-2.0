import './draggableitem.css'

export const DraggableItem = ({item}) => {

    return(
        <div>  
            <p>hey?</p>
            <img className="drag-wrapper" src={item.imageURL}/>          
        </div>
    )
}