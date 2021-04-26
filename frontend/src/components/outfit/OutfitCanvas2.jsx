import {useState, useRef, useCallback, useEffect} from 'react';
import ImageList from './DraggableItemList';
import {useDrop} from 'react-dnd';

import './outfit.css';

export const OutfitCanvas = ({items, user, createOutfit, handleClear, history}) => {


    const [state, setState] = useState({
        isDragging: false,
        imageURLs : [],
        itemIDs: [],
        title: ""
    })

    const [droppedItems, setDroppedItems] = useState([])

    const handleSave = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("user", user);
        formData.append("title", state.title);
        // formData.append("image", blobData);
        formData.append("imageURL", state.imageURLs);
        formData.append("items", state.itemIDs)
        createOutfit(formData)
        .then(res => history.push("/"));
    }

    const sample = [{
        index:0,
        src:"http://res.cloudinary.com/closet-x/image/upload/v1618860220/kxfe1tywwjoouagyimt6.png"
    }]

    const [, drop] = useDrop({
        accept: "Image",
        drop: (item) => {
            setDroppedItems([sample])
            console.log(item)
        }
    })


    return(
        <div className="canvas-container" ref={drop}>
            <ImageList images={droppedItems} />
            <div className="outfit-button-container">
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

