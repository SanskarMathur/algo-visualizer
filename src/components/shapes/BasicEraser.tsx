import {Line} from "react-konva";
import Shape from "../Shape";

const BasicEraser = ({stroke, strokeWidth, fill, isDraggable, rotation, properties}: Shape) => {
	return (
		<Line
			stroke={stroke}
			strokeWidth={strokeWidth}
			rotation={rotation}
			points={properties.points}
			fill={fill}
			draggable={isDraggable}
			lineCap="round"
			lineJoin="round"
			perfectDrawEnabled
			globalCompositeOperation="destination-out"
		/>
	);
};

export default BasicEraser;
