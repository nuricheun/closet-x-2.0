import { DragSource } from "react-dnd";

const imageSource = {
  beginDrag(item, monitor, component) {
    const id = item._id;
    const initialPos = monitor.getClientOffset();
    const source = item.imageURL;
    const width = item.width;
    return {id, initialPos, source, width};
    
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    posDiff: monitor.getDifferenceFromInitialOffset()
  };
}

const ItemSliderShow = ({item, translateDelta, connectDragSource}) => {
    
    const { imageURL, title } = item;

    return connectDragSource(
      <div
        className="outfit-item-vert"
        style={{ transform: `translateY(${translateDelta}%)` }}
      >
        <div>Title: {title}</div>
        <div className="outfit-item-img-div">
          <img crossOrigin="Anonymous" className="item-img" src={`${imageURL}?liuahvanb`} alt="" />
        </div>
      </div>
    );
  }


export default DragSource("image", imageSource, collect)(ItemSliderShow);
