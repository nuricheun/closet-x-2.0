import OutfitCanvasContainer from "./OutfitCanvasContainer";
import OutfitScrollBarContainer from "./OutfitScrollbarContainer";

import './outfit.css'

export const OutfitCreate = () => {

  return (
    <div className="outfit-create-container">
      <OutfitCanvasContainer />
      <div className="outfit-items-scrollbar">
        <OutfitScrollBarContainer />
      </div>
    </div>
  );
  
}


