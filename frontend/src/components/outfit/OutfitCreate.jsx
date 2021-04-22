import {useState} from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import OutfitCanvasContainer from "./OutfitCanvasContainer";
import OutfitScrollBarContainer from "./OutfitScrollbarContainer";

const OutfitCreate = () => {
  
    const [state, setState] = useState({
      items:[ ]
    })

  const onDrop = (item) => {
    let img = new Image();
    let canvas = document.querySelector("canvas");
    img.crossOrigin = "Anonymous";
    img.src = `${item.source}?oiearbaerab`
    let x = parseInt(item.newPos.x) - canvas.offsetLeft;
    let y = parseInt(item.newPos.y) - canvas.offsetTop;

    let newItem = {id: item.id, image: img, x, y};
    
    setState({
      items: [state.items, newItem]
    });
    
  }

  const handleClear = (e) => {
    e.preventDefault();
    setState({items: []})
  }

  
    return (
      <div className="outfit-create-container">
        <OutfitCanvasContainer items={state.items} onDrop={onDrop} handleClear={handleClear}/>
        <div className="outfit-items-scrollbar">
          <OutfitScrollBarContainer />
        </div>
      </div>
    );
  
}

export default DragDropContext(HTML5Backend)(OutfitCreate);
