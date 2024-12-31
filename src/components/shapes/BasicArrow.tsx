import { Arrow } from "react-konva";
import Shape from "../Shape";

const BasicArrow = ({ stroke, strokeWidth, fill, isDraggable, rotation, properties }: Shape) => {
	return (
		<Arrow
			stroke={stroke}
			strokeWidth={strokeWidth}
			rotation={rotation}
			points={properties.points}
			fill={fill}
			draggable={isDraggable}
			pointerLength={10}
		/>
	);
};

export default BasicArrow;
