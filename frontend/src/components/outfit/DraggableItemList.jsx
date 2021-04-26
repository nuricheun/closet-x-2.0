import {useEffect} from 'react'
import {DraggableItem} from './DraggableItem'

const ImageList = ({ images }) => {

  useEffect(() => {
    console.log(images)
    
  }, [images])

  const renderImage = (image) => {
    return (
      <DraggableItem
        item={image}
      />
    );
  };

  return <section className="file-list">{images.map(renderImage)}</section>;
};

export default ImageList;
