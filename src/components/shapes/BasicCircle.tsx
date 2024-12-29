import { Circle } from "react-konva";
import Shape from "../Shape";

const BasicCircle = ({ stroke, strokeWidth, fill, isDraggable, rotation, properties }: Shape) => {
	return (
		<Circle
			stroke={stroke}
			strokeWidth={strokeWidth}
			rotation={rotation}
			x={properties.x}
			y={properties.y}
			radius={properties.radius}
			fill={fill}
			draggable={isDraggable}
		/>
	);
};

export default BasicCircle;
