import { Rect, Text } from "react-konva";
import Shape from "../Shape";

const StackShape = ({
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
				<Rect
					key={index}
					x={properties.x}
					y={properties.y - index * properties.height}
					width={properties.width}
					height={properties.height}
					fill={fill}
					stroke={stroke}
					strokeWidth={strokeWidth}
				/>
			))}
			{elements?.values.map((el: any, index: number) => (
				<Text
					key={`text-${index}`}
					x={properties.x}
					y={properties.y - index * properties.height}
					width={properties.width}
					height={properties.height}
					text={el}
					align="center"
					verticalAlign="middle"
					fontSize={16}
					fill="white"
				/>
			))}
			<Text
				x={properties.x}
				y={properties.y - elements?.size * properties.height + 10}
				width={properties.width}
				height={properties.height}
				text="Top"
				align="center"
				verticalAlign="middle"
				fontSize={16}
				fill="black"
			/>
		</>
	);
};

export default StackShape;
