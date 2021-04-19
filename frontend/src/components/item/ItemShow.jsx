import {useEffect} from "react";

export const ItemShow = ({fetchItem, itemId, show, item}) => {

    useEffect(() => {
        if(itemId){
            fetchItem(itemId); 
        }
    }, [])

  
    const showHideClassName = show
      ? "show-modal-background display-flex"
      : "show-modal-background display-none";
    if (!item) {
      return null;
    }
    return (
      <>
        <div className={showHideClassName}>
          <div className="show-item-container">
            <div className="show-item-contents">
              <div>{item.title}</div>
              <img src={item.imageURL} id="show-image" alt={`item id: ${item._id}`}/>
            </div>
          </div>
        </div>
      </>
    );
}


