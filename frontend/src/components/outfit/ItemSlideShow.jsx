import {useDrag} from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';


export const ItemSliderShow = ({item, translateDelta}) => {
  
  const { _id,imageURL } = item;
  
  const [{isDragging}, drag, preview] = useDrag(() => {
    return {
    type: "Image",
    item: { _id, imageURL},
    collect: (monitor) => ({
            isDragging: monitor.isDragging(),
    })
  }
}, [_id, imageURL])

    return(
      <div
        className="outfit-item-vert"
        style={{ transform: `translateY(${translateDelta}%)` }}
      >
        <div>Title</div>
        <div className="outfit-item-img-div" ref={drag} >
          <img crossOrigin="Anonymous" className="item-img" src={`${imageURL}?liuahvanb`} alt="" />
        </div>
      </div>
    );
  }



