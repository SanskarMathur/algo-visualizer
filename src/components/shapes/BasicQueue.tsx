import { Arrow, Rect, Text } from "react-konva";
import Shape from "../Shape";

const QueueShape = ({
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
			{elements?.values.map((el, index: number) => (
				<Rect
					key={index}
					x={properties.x + index * properties.width!}
					y={properties.y}
					width={properties.width}
					height={properties.height}
					fill={fill}
					stroke={stroke}
					strokeWidth={strokeWidth}
				/>
			))}
			{elements?.values.map((el, index: number) => (
				<Text
					key={`text-${index}`}
					x={properties.x + index * properties.width!}
					y={properties.y}
					width={properties.width}
					height={properties.height}
					text={el}
					align="center"
					verticalAlign="middle"
					fontSize={16}
					fill="white"
				/>
			))}
			<Arrow
				x={properties.x - 50}
				y={properties.y + properties.height! / 2}
				points={[0, 0, 50, 0]}
				pointerLength={10}
				pointerWidth={10}
				fill="black"
				stroke="black"
			/>
			<Text
				x={properties.x - 70}
				y={properties.y + properties.height! / 2 + 10}
				text="Enqueue"
				fontSize={14}
				fill="black"
			/>
			<Arrow
				x={properties.x + elements!.size * properties.width!}
				y={properties.y + properties.height! / 2}
				points={[0, 0, 50, 0]}
				pointerLength={10}
				pointerWidth={10}
				fill="black"
				stroke="black"
			/>
			<Text
				x={properties.x + elements!.size * properties.width! + 10}
				y={properties.y + properties.height! / 2 + 10}
				text="Dequeue"
				fontSize={14}
				fill="black"
			/>
		</>
	);
};

export default QueueShape;
