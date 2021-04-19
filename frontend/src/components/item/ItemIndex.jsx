import {useState, useEffect} from "react";
import {ItemIndexEach} from "./ItemIndexEach";
import ItemFormContainer from "./NewItemContainer";
import ItemShowContainer from "./ItemShowContainer";

export const ItemIndex = ({fetchAllItems, items, userId, itemModal, newModal, toggleItemModal, toggleNewModal}) => {

  const [itemId, setItemId] = useState(null)

  const showNewItemModal = () => {
    toggleNewModal(true)
    document.addEventListener("click", hideNewItemModal, false);
  }

  const itemShowModal = (id) => {
    setItemId(id)
    toggleItemModal()
    document.addEventListener("click", hideItemShowModal, false);
  }

  const hideNewItemModal = (e) => {
    let spot = document.querySelector(".new-form-container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    toggleNewModal()
    document.removeEventListener("click", hideNewItemModal);
  }

  const hideItemShowModal = (e) => {
    let spot = document.querySelector(".new_form_container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    toggleItemModal()
    document.removeEventListener("click", hideItemShowModal);
  }

  useEffect(() => {
      fetchAllItems(userId);
  }, [])
  
  

 
    let mapped = items.map(item => (
      <ItemIndexEach key={item._id} itemShowModal={itemShowModal} item={item} />
    ));

    let modal = itemShowModal ? (
      <ItemShowContainer
        show={itemShowModal}
        hideItemShowModal={hideItemShowModal}
        itemId={itemId}
      />
    ) : (
      <></>
    );
    return (
      <div className="item-index-container">
        {modal}
        <ItemFormContainer
          show={newModal}
          hideNewItemModal={hideNewItemModal}
        />
        <div className="item-index-items-container">
          {mapped}
        </div>
        <p id="modal-text" className="display-none" onClick={showNewItemModal}>Click Me!</p>
      </div>
    );
  
}


