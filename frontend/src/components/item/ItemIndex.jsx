import {useState, useEffect} from "react";
import {ItemIndexEach} from "./ItemIndexEach";
import ItemFormContainer from '../modal/NewItemContainer';
import ItemShowContainer from '../modal/ItemShowContainer';
import {ModalTypes} from '../modal/modalType'

import './itemindex.css';

export const ItemIndex = ({fetchAllItems, items, userId, showModal, hideModal}) => {

  const [itemId, setItemId] = useState(null)

  const showNewItemModal = () => {
    hideModal(ModalTypes.NEW_ITEM_MODAL)         
  }

  const itemShowModal = (id) => {
    setItemId(id)
    showModal(ModalTypes.SHOW_ITEM_MODAL)
  }


  useEffect(() => {
      fetchAllItems(userId);
  }, [])
  
  

 
    let mapped = items.map(item => (
      <ItemIndexEach key={item._id} itemShowModal={itemShowModal} item={item} />
    ));

    
    return (
      <div className="item-index-container">

        <ItemShowContainer itemId={itemId}/>
        <ItemFormContainer/>
        <div className="item-index-items-container">
          {mapped}
        </div>
        <p id="modal-text" className="display-none" onClick={showNewItemModal}>Click Me!</p>
      </div>
    );
  
}


