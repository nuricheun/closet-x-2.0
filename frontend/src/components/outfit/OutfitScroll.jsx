import {useState, useEffect, useRef} from "react";
import {ItemSliderShow} from "./ItemSlideShow";

import './Outfit.css';

export const OutfitScrollbar = ({fetchAllItems, userId, items}) => {
  
  const [state, setState] = useState({
    translateDelta: 0,
    delta: 300,
    itemsLeft: 0
  });

  const loading = useRef(true)

  useEffect(() => {
    if(loading.current){
      fetchAllItems(userId)
      .then(()=> setState({...state, itemsLeft: items.length-3}))
      .then(() => loading.current = false)
    }
  }, [])

  const handleButton = (arg) => {
    const { translateDelta, delta, itemsLeft } = state;

    if (arg === "prev" && translateDelta + delta <= 0) {
      setState({
        ...state,
        translateDelta: translateDelta + delta,
        itemsLeft: itemsLeft + 3
      });
    } else if (arg === "next" && itemsLeft >= 0) {
      setState({
        ...state,
        translateDelta: translateDelta - delta,
        itemsLeft: itemsLeft - 3
      });
    }
  }

  if(!items) return null

  const renderItems = items.map(item => {

    return (
        <ItemSliderShow
          key={item._id.$oid}
          item={item}
          translateDelta={state.translateDelta}
        />
    );
  });


  return (
    <div className="outfit-item-slider">  
      <div className="item-scroll-header">Items</div>
      <div className="item-slide-index">{renderItems}</div>
      <div className="dashboard-buttons-vert">
        <button onClick={() => handleButton("prev")}>&and;</button>
        <button onClick={() => handleButton("next")}>&or;</button>
      </div>
    </div>
  );
  
}


