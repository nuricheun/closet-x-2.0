import {useState, useEffect, useRef} from "react";
import {ItemSliderShow} from "./ItemSlideShow";

import './outfit.css';


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

    // TODO:
    // implment some sort of throttling function
    // to prevent bad UX
    // prev <= 0 to prevent over scrolling
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

  
    const renderItems = items.map(item => {
      return (
          <ItemSliderShow
            key={item.id}
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


