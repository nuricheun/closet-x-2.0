import {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import OutfitContainer from "../outfit/OutfitContainer";
import "./ImgSlider.css"

const SliderComponent = ({items}) => {
  
  const [translateDelta, setTranslateDelta] = useState(0)
  const [delta, setDelta] = useState(300)
  const [itemsLeft, setItemsLeft] = useState(0)

  useEffect(() => {
    if(items) {
      setItemsLeft(items.length )
    }
  }, [itemsLeft])


  const handleButton = (arg) => {
    
    // TODO:
    // implment some sort of throttling function
    // to prevent bad UX
    // prev <= 0 to prevent over scrolling
    if (arg === "prev" && translateDelta + delta <= 0) {
      setTranslateDelta(translateDelta+delta)
      setItemsLeft(itemsLeft+3)
    } else if (arg === "next" && itemsLeft >= 0) {
      setTranslateDelta(translateDelta-delta)
      setItemsLeft(itemsLeft-3)
    }
  }


    const renderItems = items.map(item => {
      return (
        <OutfitContainer
          key={item._id}
          outfit={item}
          translateDelta={translateDelta}
        />
      );
    });

    return (
      <div className="img-slider">
        <div className="outfit-index">{renderItems}</div>
        <div className="dashboard-buttons">
          <button onClick={() => handleButton("prev")}>{"<<<"}</button>
          <button onClick={() => handleButton("next")}>{">>>"}</button>
        </div>
      </div>
    );
  
}

export default withRouter(SliderComponent);
