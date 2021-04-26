import {useDrop, useDrag} from 'react-dnd';



export const ItemSliderShow = ({item, translateDelta}) => {
  
  const { imageURL, title } = item;
  
  const [,drag] = useDrag(() => ({
    type: "Image",
    end: () => console.log("hh")
  }))

    return(
      <div
        className="outfit-item-vert"
        style={{ transform: `translateY(${translateDelta}%)` }}
        
      >
        <div>Title: hi{title}</div>
        <div className="outfit-item-img-div" ref={drag}>
          <img crossOrigin="Anonymous" className="item-img" src={`${imageURL}?liuahvanb`} alt="" />
        </div>
      </div>
    );
  }



