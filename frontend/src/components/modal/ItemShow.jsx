import {useEffect} from "react";
import './modal.css';
import './item.css';

export const ItemShow = ({fetchItem, itemId, item, hideModal}) => {

    useEffect(() => {
        if(itemId){
            fetchItem(itemId); 
        }
    }, [])

    if (!item) {
      return null;
    }

    return (
      <div className="show-item-container" >
        <div className="show-item-contents">
          <div>{item.title}</div>
          <img src={item.imageURL} id="show-image" alt={`item id: ${item._id}`}/>
        </div>
      </div>
    );
}


