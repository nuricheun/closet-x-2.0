import {useState, useCallback} from 'react';
import ImageList from './DraggableItemList';
import update from 'immutability-helper';
import {useDrop} from 'react-dnd';

import './outfit.css';

export const OutfitCanvas = ({user, createOutfit, history}) => {


    const [state, setState] = useState({
        isDragging: false,
        imageURLs : [],
        itemIDs: [],
        title: ""
    })


    const [droppedItems, setDroppedItems] = useState({})

    const moveBox = useCallback((_id, left, top, imageURL) => {

        setDroppedItems({
            ...droppedItems, 
                [_id]: {_id, left, top, imageURL}
        })

    }, [droppedItems]);

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

    const handleClear = (e) => {
        e.preventDefault();
        setDroppedItems([])
    }

    const sample = [{
        id: 'a',
        left: '13',
        right: '15',
        src:"http://res.cloudinary.com/closet-x/image/upload/v1618860220/kxfe1tywwjoouagyimt6.png"
    }]

    const [, drop] = useDrop({
        accept: "Image",
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();
            const initialPos = monitor.getInitialClientOffset();
            let left = Math.round(initialPos.x + delta.x);
            let top = Math.round(initialPos.y + delta.y);

            if(droppedItems[item._id] === undefined){
                setDroppedItems({...droppedItems, [item._id]: {_id: item._id, left, top, imageURL: item.imageURL}})
            }else{
                moveBox(item._id, left, top, item.imageURL);
            }
          
            return undefined;
        }
    })

    const mapped = Object.values(droppedItems).map(item => {
        return (
            <div>
                <img style={{width: "100px", height: "100px" }} src={String(item.imageURL)} alt="hey"/>
            </div>
        )
    })

    return(
        <div className="canvas-container" ref={drop}>
            {/* <ImageList images={droppedItems} /> */}
            <div
                style={{width: "1000px", height: "1000px" }}
            >
                {mapped}
            </div>
            <div className="outfit-button-container">
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

