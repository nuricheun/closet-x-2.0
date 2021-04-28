import {useState, useCallback} from 'react';
import update from 'immutability-helper';
import {useDrop} from 'react-dnd';
import {DraggableBox} from './DraggableItem';
import './outfit.css';


export const OutfitCanvas = ({user, createOutfit, history}) => {

    const [state, setState] = useState({
        isDragging: false,
        imageURLs : [],
        itemIDs: [],
        title: ""
    })

    const [droppedItems, setDroppedItems] = useState({})

     const moveBox = useCallback((_id, left, top) => {
        setDroppedItems(
        update(droppedItems, {
            [_id]: {
                $merge: { left, top }}
            }));
        },[droppedItems]);

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
        setDroppedItems({})
    }

    const [, drop] = useDrop(()=>(
        {
        accept: "Image",
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();
            const initialPos = monitor.getInitialClientOffset();
        
            let left = Math.round((item.left || initialPos.x) + delta.x);
            let top = Math.round((item.top || initialPos.y) + delta.y);

            if(droppedItems[item._id] === undefined){
                let merged = update(droppedItems, {$merge: {[item._id]: item}})
                setDroppedItems(update(
                    merged, {
                        [item._id]: {
                            $merge: {left, top}
                        }
                    }
                ))
            }else{
                moveBox(item._id, left, top);
            }
            return undefined;
        }
    }), [moveBox])

    const mapped = Object.keys(droppedItems).length > 0 ? Object.keys(droppedItems).map((key) => {
        return (
            <DraggableBox key={key} {...droppedItems[key]} />
        )}) :  <></>

    return(
        <div className="canvas-container">
            <div ref={drop} className="canvas">
                {mapped}
            </div>
            <div className="outfit-button-container">
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

