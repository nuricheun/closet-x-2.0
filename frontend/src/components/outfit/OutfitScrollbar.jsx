import {useState, useEffect, useRef} from "react";
// import ItemIndex from "../items/item_index";
import ItemSliderShow from "./item_slide_show";

const OutfitScrollbar = ({fetchAllItems, userId, items}) => {
  
 
  const [state, setState] = useState({
    translateDelta: 0,
    delta: 300,
    itemsLeft: 0
  });

  const loading = useRef(true)

  useEffect(() => {
    if(loading.current && items.length > 0){
      fetchAllItems(userId)
      .then(()=> setState({['itemsLeft']: items.length-3}))
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
        translateDelta: translateDelta + delta,
        itemsLeft: itemsLeft + 3
      });
    } else if (arg === "next" && itemsLeft >= 0) {
      setState({
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

export default OutfitScrollbar;
