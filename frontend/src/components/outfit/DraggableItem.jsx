import { memo, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';


    const getStyles = (left, top, isDragging) => {
    
        const transform = `translate(${left}px, ${top}px)`;
            return {
                position: 'absolute',
                transform,
                // WebkitTransform: transform,
                // IE fallback: hide the real node using CSS when dragging
                // because IE will ignore our custom "empty image" drag preview.
                // opacity: isDragging ? 0 : 1,
                // height: isDragging ? 0 : '',
            };
    }


export const DraggableBox = memo(function DraggableBox(props) {

    const { _id, left, top, imageURL } = props;

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: "Image",
        item: { _id, left, top, imageURL},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [_id, left, top, imageURL]);

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    return (
        <div ref={drag} style={getStyles(left, top, isDragging)}>
            <img src={imageURL} style={{width: "100px"}} alt="" />
		</div>
    );
});
