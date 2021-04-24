import { useDropzone } from 'react-dropzone';
import {DraggableItem} from './DraggableItem';
import './outfitdropzone.css'

export const OutfitDropzone = ({onDrop, droppedItems}) => {
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop
    })

    const mapped = droppedItems.map(e=>{
        return <DraggableItem src={e.src} />
    })
    

    return(
        <div {...getRootProps()}>
            <input className="dropzone-input" {...getInputProps()} />
            {mapped}
        </div>
    )
}