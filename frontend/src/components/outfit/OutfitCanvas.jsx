import {useState, useEffect, useRef} from "react";
import { DropTarget } from "react-dnd";

export const OutfitCanvas = ({items, connectDropTarget, onDrop, drop, user, createOutfit, handleClear, history}) => {
  
    const didMountRef = useRef(false)
    const [state, setState] = useState({
        isDragging: false,
        imageURLs : [],
        itemIDs: [],
        title: ""
    })

    

    useEffect(() => {
        if(didMountRef.current){
            setState({imageURLs : [],itemIDs: []});
        for(let i = 0; i < items.length; i++) {
          setState({imageURLs : [...state.imageURLs, items[i].image.src],
            itemIDs: [...state.itemIDs, items[i].id]})
        }

      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      renderAll(ctx);
        }else{
            let canvas = document.getElementById("canvas");
            canvas.height = 600;
            canvas.width = 600; 
            didMountRef.current=true;
        }
    }, [items])

  
  

  const renderAll = (ctx) => {
    for(let i = 0; i < items.length; i++) {
      let r = items[i];
      renderToCanvas(ctx, r);
    }
  }

  const returnState = () => {
    console.log(state);
  }

  const renderToCanvas = (ctx, imageObj) => {
    let img = new Image ();
    img.crossOrigin = "Anonymous";
    img.src = imageObj.image.src;
    window.show = returnState;

    img.onload = function() {
      console.log(img);
      let widthScale = 200 / img.width;
      let heightScale = 200 / img.height;
      let scale = widthScale < heightScale ? widthScale : heightScale
      if (imageObj.width === undefined) {
        imageObj.width = img.width*scale;
      }
      if (imageObj.height === undefined) {
        imageObj.height = img.height*scale;
      }

      ctx.drawImage(img, imageObj.x, imageObj.y, imageObj.width, imageObj.height);
    }
  }

  const onMouseDown =(e) =>{
    e.preventDefault();
    e.stopPropagation();

    let canvas = document.getElementById("canvas");

    let mx = parseInt(e.clientX - canvas.offsetLeft);
    let my = parseInt(e.clientY - canvas.offsetTop);

    setState({isDragging: false})
    for(let i = 0; i < items.length; i++) {
      let r = items[i];
      if(mx > r.x && mx < r.x + r.width && my > r.y && my < r.y + r.height) {
        r.isDragging=true;
        setState({isDragging: true});
      }
    }
    setState({startX: mx, startY: my})
  }

  const onMouseUp = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setState({["isDragging"]: false});
    let curr;

    for(var i=0; i < items.length; i++){
      curr = items[i]
      curr.isDragging=false;
    }

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    renderAll(ctx);
  }

  const onMouseMove = (e) => {
    if(!state.isDragging) {return;}

    e.preventDefault();
    e.stopPropagation();
    let canvas = document.getElementById("canvas");

    let mx = parseInt(e.clientX - canvas.offsetLeft);
    let my = parseInt(e.clientY - canvas.offsetTop);

    let dx = mx - state.startX;
    let dy = my - state.startY;

    for(let i = 0; i < items.length; i++) {
      let r = items[i];
      if(r.isDragging) {
        r.x += dx;
        r.y += dy;
      }
    }
    setState({startX: mx, startY: my});

    let ctx = canvas.getContext("2d");
    renderAll(ctx);
  }

  const handleChange = (e) => {
    setState({
      title: e.currentTarget.value
    })
  }

  const handleSave = (e) => {
    e.preventDefault();
    let canvas = document.getElementById("canvas");

    let dataUrl = canvas.toDataURL('png');
    let blobData = dataURItoBlob(dataUrl);

    const formData = new FormData();
    formData.append("user", user);
    formData.append("title", state.title);
    formData.append("image", blobData);
    formData.append("imageURL", state.imageURLs);
    formData.append("items", state.itemIDs)
    createOutfit(formData)
    .then(res => history.push("/"));
  }

  const dataURItoBlob = (dataURI) => {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}
    return connectDropTarget(
      <div className="canvas-container">
        <div className="canvas-header">Plan an outfit</div>
        <canvas
          id="canvas"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
        </canvas>
        <div className="outfit-create-options">
          <input type="text" value={state.title} onChange={handleChange}
            placeholder="Outfit Title..."></input>
          <div className="outfit-button-container">
            <button onClick={handleClear}>Clear</button>
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    )
  
}

    const spec = {
      drop(props, monitor, component) {
        const item = monitor.getItem()
        let diff = monitor.getDifferenceFromInitialOffset();
        item.newPos = {x: item.initialPos.x + diff.x, y: item.initialPos.y + diff.y}
        props.onDrop(item)
      }
    }


    const collect = (connect, monitor) => {
      return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        clientOffset: monitor.getClientOffset()
      };
    }


export default DropTarget("image", spec, collect)(OutfitCanvas);