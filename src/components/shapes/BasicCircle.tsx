import { Ellipse } from "react-konva";
import Shape from "../Shape";

const BasicCircle = ({ stroke, strokeWidth, fill, isDraggable, rotation, properties }: Shape) => {
	return (
		<Ellipse
			stroke={stroke}
			strokeWidth={strokeWidth}
			rotation={rotation}
			x={properties.x}
			y={properties.y}
			radiusX={properties.radiusX}
			radiusY={properties.radiusY}
			fill={fill}
			draggable={isDraggable}
		/>
	);
};

export default BasicCircle;
