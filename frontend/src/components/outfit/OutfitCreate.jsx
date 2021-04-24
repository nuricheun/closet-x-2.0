import {useState} from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import OutfitCanvasContainer from "./OutfitCanvasContainer";
import OutfitScrollBarContainer from "./OutfitScrollbarContainer";
import {DraggableItem} from './DraggableItem';

import './outfit.css'


export const OutfitCreate = () => {
  
  const [items, setItems] = useState([]);

  const onDrop = (item) => {
    setItems([...items, <DraggableItem item={item} />])
    console.log(items)
  }

  const handleClear = (e) => {
    e.preventDefault();
    setItems([])
  }

  
  return (
    <div className="outfit-create-container">
      <OutfitCanvasContainer items={items} onDrop={onDrop} handleClear={handleClear}/>
      <div className="outfit-items-scrollbar">
        <OutfitScrollBarContainer />
      </div>
    </div>
  );
  
}


