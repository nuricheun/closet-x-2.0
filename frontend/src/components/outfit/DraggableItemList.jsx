import {useEffect} from 'react'
import {DraggableItem} from './DraggableItem'

const ImageList = ({ images }) => {

  useEffect(() => {
  }, [images])

  const renderImage = (image) => {
    return (
      <DraggableItem
        item={image}
      />
    );
  };

  return <section className="file-list">{images.length > 0 && images.map(renderImage)}</section>;
};

export default ImageList;
