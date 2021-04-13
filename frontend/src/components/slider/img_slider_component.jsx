import {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import OutfitContainer from "../outfit/outfit_container";

const SliderComponent = ({items}) => {
  
  const [state, setState] = useState({
    translateDelta: 0,
    delta: 300,
    itemsLeft: 0
  })

  useEffect(() => {
    if(items) {
      setState({["itemsLeft"]: items.length })
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
        <OutfitContainer
          key={item._id}
          outfit={item}
          translateDelta={state.translateDelta}
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
