import {createRef, useState, useCallback} from 'react';
import update from 'immutability-helper';
import {useDrop} from 'react-dnd';
import { useScreenshot } from 'use-react-screenshot'
import html2canvas from 'html2canvas';
// import {DraggableBox} from './DraggableItem';
import {DraggableItem} from './DraggableItem2';
import './Outfit.css';

export const OutfitCanvas = ({createOutfit, history}) => {

    const [title, setTitle] = useState('');

    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(ref.current)

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
        screenShot(ref)
        .then((res)=>{
            const formData = new FormData();
            formData.append("title", title);
            formData.append("file", res);
            return createOutfit(formData)
        })
        .then(res => history.push("/"));
    }

    const handleClear = (e) => {
        e.preventDefault();

        setDroppedItems({})
        setTitle('')
    }

    const handleChange = (e) => {
        setTitle(e.currentTarget.value)
    }

    const screenShot = (node) => {
        if (!node) {
            throw new Error('You should provide correct html node.');
        }

        return html2canvas((node.current), {useCORS: true})
        .then((canvas) => {
            
            const croppedCanvas = document.createElement('canvas');
            const croppedCanvasContext = croppedCanvas.getContext('2d');
            let cropWidth = canvas.width;
            let cropHeight = canvas.height;
            let cropPositionTop = 0;
            let cropPositionLeft = 0;
            croppedCanvas.width = cropWidth;
            croppedCanvas.height = cropHeight;
            croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

            let base64Image = croppedCanvas.toDataURL();
            return base64Image;
            
    })};


    const [, drop] = useDrop(()=>(
        {
        accept: "Image",
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();
            const initialPos = monitor.getInitialClientOffset();
        
            let left = Math.round((item.left || initialPos.x) + delta.x);
            let top = Math.round((item.top || initialPos.y) + delta.y);

            if(droppedItems[item._id.$oid] === undefined){
                let merged = update(droppedItems, {$merge: {[item._id.$oid]: item}})
                setDroppedItems(update(
                    merged, {
                        [item._id.$oid]: {
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

    // React-dnd version 
    // const mapped = Object.keys(droppedItems).length > 0 ? Object.keys(droppedItems).map((key) => {
    //     return (
    //         <DraggableBox key={key} {...droppedItems[key]} />
    //     )}) :  <></>


    //Draggable version
    const mapped = Object.keys(droppedItems).length > 0 ? Object.keys(droppedItems).map((key) => {
        
        return (
            <DraggableItem key={key} {...droppedItems[key]} />
        )}) :  <></>

    return(
        <div className="canvas-container">
            <div ref={drop} className="canvas">
                <div ref={ref} className="capture">
                        {mapped}
                </div>
            </div>
            <div className="outfit-create-options">
                <input type="text" value={title} 
                    onChange={handleChange}
                    placeholder="Outfit Title..."></input>
                <div className="outfit-button-container">
                    <button onClick={handleClear}>Clear</button>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    )
}

