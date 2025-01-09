import { Rect, Text } from "react-konva";
import Shape from "../Shape";

const ArrayShape = ({
	stroke,
	strokeWidth,
	fill,
	isDraggable,
	rotation,
	properties,
	elements,
}: Shape) => {
	return (
		<>
			{elements?.values.map((el: any, index: number) => (
				<>
					<Rect
						key={index}
						x={properties.x + index * properties.width}
						y={properties.y}
						width={properties.width}
						height={properties.height}
						fill={fill}
						stroke={stroke}
						strokeWidth={strokeWidth}
					/>
					<Text
						key={`index-${index}`}
						x={properties.x + index * properties.width}
						y={properties.y - 30}
						width={properties.width}
						height={properties.height}
						text={index.toString()}
						align="center"
						verticalAlign="middle"
						fontSize={12}
						fill="black"
					/>
					<Text
						key={`text-${index}`}
						x={properties.x + index * properties.width}
						y={properties.y}
						width={properties.width}
						height={properties.height}
						text={el}
						align="center"
						verticalAlign="middle"
						fontSize={16}
						fill="white"
					/>
				</>
			))}
		</>
	);
};

export default ArrayShape;
