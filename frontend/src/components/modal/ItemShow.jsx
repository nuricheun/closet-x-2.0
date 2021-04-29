import {useEffect} from "react";
import {useModalRef} from '../../hooks/useModal';
import './modal.css';

export const ItemShow = ({fetchItem, itemId, item, hideModal}) => {

  const node = useModalRef(hideModal)

    useEffect(() => {
        if(itemId){
            fetchItem(itemId); 
        }
    }, [])

    if (!item) {
      return null;
    }

    return (
      <div className="show-item-container" ref={node}>
        <div className="show-item-contents">
          <div>{item.title}</div>
          <img src={item.imageURL} id="show-image" alt={`item id: ${item._id}`}/>
        </div>
      </div>
    );
}


