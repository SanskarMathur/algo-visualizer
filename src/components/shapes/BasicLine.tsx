import { Line } from "react-konva";
import Shape from "../Shape";

const BasicLine = ({ stroke, strokeWidth, fill, isDraggable, rotation, properties }: Shape) => {
	return (
		<Line
			stroke={stroke}
			strokeWidth={strokeWidth}
			rotation={rotation}
			points={properties.points}
			fill={fill}
			draggable={isDraggable}
		/>
	);
};

export default BasicLine;
