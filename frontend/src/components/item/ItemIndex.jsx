import {useState, useEffect} from "react";
import ItemIndexEach from "./ItemIndexEach";
import ItemFormContainer from "./newItemContainer";
import ItemShowContainer from "./ItemShowContainer";

const ItemIndex = ({fetchAllItems, items, userId}) => {

    const [modal, setModal] = useState(null)
    const [itemShowModal, setItemShowModal] = useState(false)
    const [showNewItemModal, setShowNewItemModal] = useState(false);


  const showNewItemModal = () => {
    setShowNewItemModal(true)
    document.addEventListener("click", hideNewItemModal, false);
  }

  const itemShowModal = (id) => {
    this.setState({ itemShowModal: true, modal: id });
    document.addEventListener("click", hideItemShowModal, false);
  }

  const hideNewItemModal = (e) => {
    let spot = document.querySelector(".new-form-container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    setShowNewItemModal(false)
    document.removeEventListener("click", hideNewItemModal);
  }

  const hideItemShowModal = (e) => {
    let spot = document.querySelector(".new_form_container");
    if (spot && spot.contains(e.target)) {
      return;
    }
    showItemShowModal(false)
    document.removeEventListener("click", hideItemShowModal);
  }

  useEffect(() => {
      fetchAllItems(userId);
  }, [])
  
  

 
    let items = items.map(item => (
      <ItemIndexEach key={item._id} itemShowModal={itemShowModal} item={item} />
    ));
    let modal = itemShowModal ? (
      <ItemShowContainer
        show={itemShowModal}
        hideItemShowModal={hideItemShowModal}
        itemId={modal}
      />
    ) : (
      <></>
    );
    return (
      <div className="item-index-container">
        {modal}
        <ItemFormContainer
          show={showNewItemModal}
          hideNewItemModal={hideNewItemModal}
        />
        <div className="item-index-items-container">
          {items}
        </div>
        <p id="modal-text" className="display-none" onClick={setShowNewItemModal}>Click Me!</p>
      </div>
    );
  
}

export default ItemIndex;
