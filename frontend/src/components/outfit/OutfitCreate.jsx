import {useState} from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import OutfitCanvasContainer from "./OutfitCanvasContainer";
import OutfitScrollBarContainer from "./OutfitScrollbarContainer";
import {DraggableItem} from './DraggableItem';


import './outfit.css'

const type = "Image";

export const OutfitCreate = () => {
  
  const [items, setItems] = useState([]);

  

  // const onDrop = (item) => {
  //   setItems([...items, <DraggableItem item={item} />])
  //   console.log(items)
  // }

  const handleClear = (e) => {
    e.preventDefault();
    setItems([])
  }

  
  return (
    <div className="outfit-create-container">
    {/* <DndProvider backend={HTML5Backend}> */}
      <OutfitCanvasContainer items={items} handleClear={handleClear}/>
      <div className="outfit-items-scrollbar">
        <OutfitScrollBarContainer />
      </div>
      {/* </DndProvider> */}
    </div>
  );
  
}


