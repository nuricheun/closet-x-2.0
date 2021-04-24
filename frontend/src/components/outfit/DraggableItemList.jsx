import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";


const Image = ({ image, moveImage }) => {
    const ref = useRef(null);
    const type = "Image"; // Need to pass which type element can be draggable

    // const [, drop] = useDrop({
    //     accept: type,
    //     hover(item) {
    //     if (!ref.current) {
    //         return;
    //     }
    // }
    // });

//   const [{ isDragging }, drag] = useDrag({
//     item: { type, id: 155 },
//     collect: monitor => ({
//       isDragging: monitor.isDragging()
//     })
//   });

  // initialize drag and drop into the element
//   drag(drop(ref));

  return (
    <div
      ref={ref}
    //   style={{ opacity: isDragging ? 0 : 1 }}
      className="file-item"
    >
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

const ImageList = ({ images, moveImage }) => {
  const renderImage = (image) => {
    return (
      <Image
        image={image}
        key={`${image.id}-image`}
        moveImage={moveImage}
      />
    );
  };

  return <section className="file-list">{images.map(renderImage)}</section>;
};

export default ImageList;
