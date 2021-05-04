import {useState, useEffect} from "react";
import {ItemIndexEach} from "./ItemIndexEach";
import {ModalTypes} from '../modal/modalType'


import './itemindex.css';

export const ItemIndex = ({fetchAllItems, items, userId, showModal }) => {

  const [itemId, setItemId] = useState(null)


  // const itemShowModal = (id) => {
  //   setItemId(id)
  //   showModal(ModalTypes.SHOW_ITEM_MODAL)
  // }


  useEffect(() => {
      fetchAllItems(userId);
  }, [])
  
  

 
    let mapped = items.map(item => (
      <ItemIndexEach key={item._id} itemShowModal={()=>showModal(ModalTypes.SHOW_ITEM_MODAL)} item={item} />
    ));

    
    return (
      <div className="item-index-container">
        {items.length === 0 ? <button onClick={()=>showModal(ModalTypes.NEW_ITEM_MODAL)}>Add Item</button> : 
          <>
            <div className="item-index-items-container">
              {mapped}
            </div>
          </>
        }
      </div>
    );
  
}


