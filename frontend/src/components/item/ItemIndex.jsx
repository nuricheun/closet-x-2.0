import {useState, useEffect} from "react";
import {ItemIndexEach} from "./ItemIndexEach";
import ItemFormContainer from '../modal/NewItemContainer';
import ItemShowContainer from '../modal/ItemShowContainer';

import './itemindex.css';

export const ItemIndex = ({fetchAllItems, items, userId, itemModal, newModal, toggleItemFormModal, toggleNewFormModal}) => {

  const [itemId, setItemId] = useState(null)

  const showNewItemModal = () => {
    toggleNewFormModal()
    document.addEventListener("click", hideNewItemModal, false);
  }

  const itemShowModal = (id) => {
    setItemId(id)
    toggleItemFormModal()
    document.addEventListener("click", hideItemShowModal, false);
  }

  const hideNewItemModal = (e) => {
    let spot = document.querySelector(".new-form-container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    toggleNewFormModal()
    document.removeEventListener("click", hideNewItemModal);
  }

  const hideItemShowModal = (e) => {
    let spot = document.querySelector(".new_form_container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    toggleItemFormModal()
    document.removeEventListener("click", hideItemShowModal);
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


