import {useState, useRef, useCallback, useEffect} from 'react';
import { DndProvider } from "react-dnd";
import {OutfitDropzone} from './OutfitDropzone';
import {HTML5Backend} from "react-dnd-html5-backend";
import ImageList from './DraggableItemList';
import update from "immutability-helper";
import cuid from 'cuid';


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

        // let dataUrl = canvas.toDataURL('png');
        // let blobData = dataURItoBlob(dataUrl);

        const formData = new FormData();
        formData.append("user", user);
        formData.append("title", state.title);
        // formData.append("image", blobData);
        formData.append("imageURL", state.imageURLs);
        formData.append("items", state.itemIDs)
        createOutfit(formData)
        .then(res => history.push("/"));
    }

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.map(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            setDroppedItems(prevState => [
            ...prevState,
            { id: cuid(), src: e.target.result }
            ]);
        };
        reader.readAsDataURL(file);
        return file;
        });
    }, []);

    const moveImage = (dragIndex, hoverIndex) => {
        const draggedImage = droppedItems[dragIndex];
        setDroppedItems(
            update(items, {
                $splice: [[dragIndex, 1], [hoverIndex, 0, draggedImage]]
            })
        );
    };

    const sample = [{
        index:0,
        src:"http://res.cloudinary.com/closet-x/image/upload/v1618860220/kxfe1tywwjoouagyimt6.png"
    }]

    return(
        <div className="canvas-container">
            <OutfitDropzone onDrop={onDrop} droppedItems={droppedItems} />
            <DndProvider backend={HTML5Backend}>
                <ImageList images={sample} moveImage={moveImage}/>
            </DndProvider>
            <div className="outfit-button-container">
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

