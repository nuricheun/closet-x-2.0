

export const ItemIndexEach = ({itemShowModal, item}) => {
  return (
    <div className="item-index-item-container">
      <img
        className="item-index-item"
        src={item.imageURL}
        onClick={() => itemShowModal(item._id)}
        alt={`item: ${item._id}`}
      />
    </div>
  );
};



