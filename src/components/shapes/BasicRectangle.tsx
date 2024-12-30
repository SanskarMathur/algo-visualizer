import {Rect} from "react-konva";
import Shape from "../Shape";

const BasicRectange = ({stroke, strokeWidth, fill, isDraggable, rotation, properties}: Shape) => {
	return (
		<Rect
			stroke={stroke}
			strokeWidth={strokeWidth}
			rotation={rotation}
			x={properties.x}
			y={properties.y}
			height={properties.height}
			width={properties.width}
			fill={fill}
			draggable={isDraggable}
		/>
	);
};

export default BasicRectange;
